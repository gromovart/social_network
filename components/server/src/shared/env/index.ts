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
export const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

/** Режим запуска программы */
export const NODE_ENV = getEnvVar('NODE_ENV');
/** Режим локальной разработки */
export const isLocEnv = NODE_ENV === 'local';
/** Режим разработки */
export const isDevEnv = NODE_ENV === 'development';
/** Режим продакшена */
export const isProdEnv = NODE_ENV === 'production';
