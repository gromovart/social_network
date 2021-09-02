import { ResponseToolkit } from '@hapi/hapi';
import app from '../../../app';
import { IDecoratedRequest, TSignUp } from './model';
// import AuthService from '../../../sevices/auth';

class Controller {
  /**
   * Контроллер для авторизации в приложении
   */

  public static controllerName = 'authUser';

  public static async authUser(
    request: IDecoratedRequest<TSignUp>,
    h: ResponseToolkit
  ) {
    const { payload } = request;
    app.log(__filename).info(this.controllerName);
    return {};
  }
}

export default Controller;
