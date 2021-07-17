// Hapi
import * as Hapi from '@hapi/hapi';
import Boom from '@hapi/boom';

// libs
import msql2 from 'mysql2';
import type { Logger } from 'pino';
import { constants as StatusCodes } from 'http2';
import _ from 'lodash';

// models
import msqlConnectionOptions from '../models/mysql/config/options';
import { migrationsRun } from '../models/mysql/migrations';

// config
import * as serverEnv from './config/env';
import { plugins } from './config/options/plugins';
import routes from '../routes';
import { baseLoggerInstance } from '../shared/lib/logger';

// const pino = require('pino');

class App {
  private static logger: (filename?: string) => Logger;

  private static server: Hapi.Server;

  private static error: Boom.Boom;

  private static connectionMsql: msql2.Connection;

  public static generateHttpError(
    errorData: any,
    code: number = StatusCodes.HTTP_STATUS_SERVICE_UNAVAILABLE
  ) {
    const {
      statusCode = (errorData.output && errorData.output.statusCode) || code,
      message = errorData.toString(),
    } = errorData;
    this.error = new Boom.Boom(message, { statusCode });
    return this.error;
  }

  private static initLogger() {
    this.logger = baseLoggerInstance;
  }

  private static subscribeEvents() {
    process.on('unhandledRejection', (err: Error) => {
      console.error(err.message);
      process.exit(1);
    });
  }

  private static subscribeEventsServer() {
    this.server.events.on('response', (request) => {
      const {
        info: { remoteAddress },
      } = request;
      const response = <Hapi.ResponseObject>request.response;
      const isSwagger = request.path.includes('/swagger');
      if (isSwagger) return true;
      const isDocumentation = request.path.includes('/documentation');
      this.log().info(
        JSON.stringify({
          request: {
            from: remoteAddress,
            to: `${request.method.toUpperCase()} ${request.path}`,
            headers: request.headers,
            body: request.payload,
          },
          response: {
            body: isDocumentation ? 'documentation' : 'response',
            statusCode:
              !_.isEmpty(response) && _.has(response, 'statusCode')
                ? response.statusCode
                : response,
          },
        })
      );
      return true;
    });
  }

  private static async initModels() {
    this.connectionMsql = msql2.createConnection(msqlConnectionOptions);
    await migrationsRun();
  }

  public static getMysqlConnection() {
    return this.connectionMsql;
  }

  private static async initServer() {
    this.server = new Hapi.Server({
      port: serverEnv.SERVER_PORT,
    });

    await this.server.register(plugins);
    this.server.route(routes);
  }

  // GETTERS

  public static log(filename: string = __filename) {
    return this.logger(filename);
  }

  public static async start() {
    this.subscribeEvents();
    try {
      this.initLogger();
      await this.initModels();
      this.log().info('Инициализация моделей выполнена');
      await this.initServer();
      this.subscribeEventsServer();
      this.log().info('Инициализация сервера выполнена');
      await this.server.start();
      this.log().info(
        'Документация доступна по адресу %s://%s:%s/api/documentation',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );
    } catch (err) {
      if (this.server) {
        await this.server.stop();
        this.log().warn('Сервер остановлен');
      }
      this.log().error(err);
    }
    return this.server;
  }
}

export default App;
