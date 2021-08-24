import { ResponseToolkit } from '@hapi/hapi';
import app from '../../../app';
import UserRepository from '../../../models/mysql/repositories/Users';
import { IDecoratedRequest, TSignUp } from './model';

export default class Controller {
  /**
   * Контроллер для обработки маршрута идентификации пользователя
   */
  public static readonly controllerName = 'signUpUser';

  public static async signUpUser(
    request: IDecoratedRequest<TSignUp>,
    h: ResponseToolkit
  ) {
    const { payload } = request;
    const user = await UserRepository.readByLogin.exec(payload);
    app.log(__filename).info(this.controllerName);
    return {};
  }
}
