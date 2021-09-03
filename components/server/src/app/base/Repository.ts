interface TBaseRepository {
  repositoryName: string;
  description: string;
  execute: (params: any, meta: any) => Promise<any>;
}

interface TConfig {
  repositoryName: string;
  description: string;
}

export default abstract class BaseRepository implements TBaseRepository {
  public repositoryName: string;

  public description: string;

  constructor(config: TConfig) {
    this.repositoryName = config.repositoryName;
    this.description = config.description;
  }

  abstract execute(params: any, meta: any): Promise<any>;
}
