// Hapi
import * as Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as HapiBearer from 'hapi-auth-bearer-token';
import * as Boom from '@hapi/boom';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';

// libs
import * as path from 'path';
import msql2 from 'mysql2';
import type { Logger } from 'pino';

import _ from 'lodash';
import { constants as StatusCodes } from 'http2';
import * as Status from 'http-status-codes';
import msqlConnectionOptions from '../models/mysql/config/options';
import * as serverEnv from './config/env';
import { migrationsRun } from '../models/mysql/migrations';

const pino = require('pino');

class App {
  private static logger: Logger;

  private static server: Hapi.Server;

  private static connectionMsql: msql2.Connection;

  private static initLogger() {
    this.logger = pino({
      level: 'debug',
      prettyPrint: {
        // Adds the filename property to the message
        colorize: true,
        messageFormat:
          '{"pid":{pid},"host":{hostname},"file":{filename},"message":{msg}}',
        levelFirst: true,
        translateTime: 'dd-mm-yyyy HH:MM:ss',

        // need to ignore 'filename' otherwise it appears beneath each log
        ignore: 'pid,hostname,filename',
      },
    }).child({
      filename: `${path.dirname(__filename)}/${path.basename(__filename)}`,
    });
  }

  private static subscribeEvents() {
    process.on('unhandledRejection', (err: Error) => {
      this.log.error(err.message);
      process.exit(1);
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

    const swaggerOptions: HapiSwagger.RegisterOptions = {
      info: {
        title: 'Test API Documentation',
      },
    };

    const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
      {
        plugin: require('hapi-pino'),
        options: {
          logPayload: false,
          logRouteTags: false,
          stream: process.stdout,
          levelTags: {
            trace: 'trace',
            debug: 'debug',
            info: 'info',
            warn: 'warn',
            error: 'error',
          },
          allTags: 'info',
          // serializers: {
          //   req: (req: any) => console.log(req),
          // },
          instance: this.logger,
          logEvents: false,
          mergeHapiLogData: false,
          ignorePaths: ['/testRoute'],
          level: 'debug',
          redact: ['test.property'],
        },
      },
      {
        plugin: Inert,
      },
      {
        plugin: Vision,
      },
      {
        plugin: HapiSwagger,
        options: swaggerOptions,
      },
    ];
    await this.server.register(plugins);
    this.server.route([
      {
        method: 'GET',
        path: '/',
        options: {
          handler(request, h) {
            return 'Hello World!';
          },
          plugins: {
            'hapi-swagger': {
              order: 1,
            },
          },
        },
      },
      {
        method: 'GET',
        path: '/petstore',
        options: {
          handler: (request: any, h) => {
            request.logger.info('In handler %s', request.path);
            return 'Hello World!';
          },
          description: 'Array properties',
          tags: ['api', 'petstore'],
          plugins: {
            'hapi-swagger': {
              order: 2,
            },
          },
        },
      },
    ]);
  }

  // GETTERS

  public static get log() {
    return this.logger;
  }

  public static async start() {
    this.subscribeEvents();
    try {
      this.initLogger();
      await this.initModels();
      await this.initServer();
      await this.server.start();
      this.log.info(
        'Документация доступна по адресу %s://%s:%s/documentation',
        this.server.info.protocol,
        this.server.info.address,
        this.server.info.port
      );
    } catch (err) {
      this.log.error(err.message);
    }
  }
}

export default App;
