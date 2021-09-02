interface TBaseService {
  serviceName: string;
  description: string;
  execute: (params: any, meta: any) => Promise<any>;
}

interface TConfig {
  serviceName: string;
  description: string;
}

export default abstract class BaseService implements TBaseService {
  public serviceName: string;

  public description: string;

  constructor(config: TConfig) {
    this.serviceName = config.serviceName;
    this.description = config.description;
  }

  abstract execute(params: any, meta: any): Promise<any>;
}
