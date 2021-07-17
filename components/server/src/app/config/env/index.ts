import * as env from '../../../shared/env';

/** SERVER entrypoint */
export const SERVER_HOST = env.getEnvVar('SERVER_HOST');
export const SERVER_PORT = env.getEnvVar('SERVER_PORT');
export const { isLocEnv } = env;
