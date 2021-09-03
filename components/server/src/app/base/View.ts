interface TBaseView {
  viewName: string;
  description: string;
  create: (params: any, meta: any) => Promise<any>;
}

interface TConfig {
  viewName: string;
  description: string;
}

export default abstract class BaseView implements TBaseView {
  public viewName: string;

  public description: string;

  constructor(config: TConfig) {
    this.viewName = config.viewName;
    this.description = config.description;
  }

  abstract create(params: any, meta: any): Promise<any>;
}
