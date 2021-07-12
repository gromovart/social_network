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
import Pino from 'pino';
import _ from 'lodash';
import { constants as StatusCodes } from 'http2';
import * as Status from 'http-status-codes';
import msqlConnectionOptions from '../models/mysql/config/options';
import * as serverEnv from './config/env';

class App {
  private logger: Pino.Logger;

  private server: Hapi.Server;

  private connectionMsql: msql2.Connection;

  private initLogger() {
    this.logger = Pino({
      prettyPrint: { colorize: true },
      level: 'debug',
      redact: {
        paths: ['request.body.file._data'],
        censor: 'too big to show',
      },
    });
  }

  private async subscribeEvents() {
    process.on('unhandledRejection', (err: Error) => {
      this.log.error(err.message);
      process.exit(1);
    });
  }

  private async initModels() {
    this.connectionMsql = msql2.createConnection(msqlConnectionOptions);
  }

  public getMysqlConnection() {
    return this.connectionMsql;
  }

  private async initServer() {
    this.server = new Hapi.Server({
      port: serverEnv.SERVER_PORT,
      host: serverEnv.SERVER_HOST,
    });
  }

  // GETTERS

  public get log() {
    return this.logger;
  }

  public async start(envs: Object) {
    try {
      this.initLogger();
      await this.subscribeEvents();
      await this.initModels();
      await this.initServer();
      await this.server.start();
    } catch (err) {
      this.log.error(err.message);
    }
  }
}
export default new App();
