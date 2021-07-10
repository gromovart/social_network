/* eslint-disable no-new */
/* eslint-disable no-console */
class Logger {
  private config: Object;

  constructor(config: Object = {}) {
    this.config = config;
  }

  public info(msg: string) {
    console.log(msg);
  }

  public warn(msg: string) {
    console.warn(msg);
  }

  public error(msg: string) {
    console.error(msg);
  }
}

export const logger = new Logger();
