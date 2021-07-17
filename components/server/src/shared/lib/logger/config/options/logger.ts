export const baseloggerOptions = {
  level: 'debug',
  prettyPrint: {
    colorize: true,
    messageFormat:
      '{"pid":"{pid}","host":"{hostname}","file":"{filename}","message":"{msg}"}',
    levelFirst: true,
    translateTime: 'dd-mm-yyyy HH:MM:ss',
    ignore: 'pid,hostname,filename',
  },
};
