/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

/** Режим запуска программы */
export const NODE_ENV = getEnvVar('NODE_ENV');
/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';
/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';

/** MSQL entrypoint */
export const MSQL_HOST = getEnvVar('MSQL_HOST');
export const MSQL_PORT = getEnvVar('MSQL_PORT');
export const MSQL_DB_NAME = getEnvVar('MSQL_DB_NAME');
export const MSQL_USER = getEnvVar('MSQL_USER');
export const MSQL_PASSWORD = getEnvVar('MSQL_PASSWORD');
