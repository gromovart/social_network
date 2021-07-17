import * as HapiBearer from 'hapi-auth-bearer-token';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as Hapi from '@hapi/hapi';
import { swaggerOptions } from './swagger';

export const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
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
  {
    plugin: HapiBearer,
  },
];
