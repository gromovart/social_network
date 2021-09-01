import { ServerRoute, RouteOptions } from '@hapi/hapi';

export type TServerRoute = ServerRoute;
export type TRouteOptions = RouteOptions;

export type TRouteConfig = {
  routeName: string;
  description: string;
  method: string;
  path: string;
  options: TRouteOptions;
};

interface TRoute {
  get: () => TServerRoute;
}

export default class Route implements TRoute {
  private routeName: string;

  private description: string;

  private method: string;

  private path: string;

  private options: TRouteOptions;

  constructor(config: TRouteConfig) {
    this.routeName = config.routeName;
    this.description = config.description;
    this.method = config.method;
    this.path = config.path;
    this.options = config.options;
  }

  /**
   * Endpoints для работы с авторизацией
   */

  public get(): TServerRoute {
    return {
      method: this.method,
      path: this.path,
      options: this.options,
    };
  }
}
