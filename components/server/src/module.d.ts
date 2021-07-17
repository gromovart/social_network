import type { Logger } from 'pino';

declare module 'fastify' {
  type FastifyLoggerInstance = Logger;
}
