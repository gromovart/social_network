import * as path from 'path';
import { baseloggerOptions } from './config/options/logger';

const pino = require('pino');

export const baseLoggerInstance = (filename?: string) => {
  if (filename) {
    return pino(baseloggerOptions).child({
      filename: `${path.dirname(filename)}/${path.basename(filename)}`,
    });
  }
  return pino(baseloggerOptions);
};
