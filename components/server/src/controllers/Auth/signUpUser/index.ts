import { ResponseToolkit } from '@hapi/hapi';
import app from '../../../app';
import AuthService from '../../../sevices/auth';
import { IDecoratedRequest, TSignUp } from './model';

export default class Controller {
  /**
   * Контроллер для обработки маршрута идентификации пользователя
   */
  public static readonly controllerName = 'signUpUser';

  public static async execute(
    request: IDecoratedRequest<TSignUp>,
    h: ResponseToolkit
  ) {
    // app.log(__filename).info(this.controllerName);
    const { payload } = request;
    const response = await AuthService.SignUp.execute(payload);

    return response;
  }
}
