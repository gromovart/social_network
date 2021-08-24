import { Request, ResponseToolkit } from '@hapi/hapi';
import app from '../../../app';

export default class Controller {
  /**
   * Контроллер для обработки маршрута выхода из системы
   */
  public static readonly controllerName = 'signOutUser';

  public static async signOutUser(request: Request, h: ResponseToolkit) {
    app.log(__filename).info(this.controllerName);
    return {};
  }
}
