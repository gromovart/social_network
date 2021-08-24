import * as HapiSwagger from 'hapi-swagger';
import { isLocEnv } from '../env';

export const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: 'SocialNetwork API',
    description: 'JSON REST API SOCIAL NETWORK',
    version: '1.0',
  },
  grouping: 'tags',
  tagsGroupingFilter: (tag) => !['api', '1.0'].includes(tag),
  schemes: [isLocEnv ? 'http' : 'https'],
  documentationPath: `/api/documentation`,
  jsonPath: `/api/swagger.json`,
  swaggerUIPath: `/api/swaggerui`,
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      description: 'Bearer token',
      in: 'header',
    },
  },
  security: [{ Bearer: [] }],
};
