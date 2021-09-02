import { Request, ResponseToolkit } from '@hapi/hapi';
import app from '../../../app';
import { TUser } from '../../../models/mysql/entities/Users';
import AuthService from '../../../sevices/auth';

export type IDecoratedRequest<P = {}, Q = {}, C = {}, H = {}, R = {}> = {
  payload: P;
  query: Q;
  auth: {
    credentials: C;
  };
  headers: H;
  params: R;
} & Request;

export default class Controller {
  /**
   * Контроллер для обработки маршрута регистрации пользователя
   */
  public static controllerName = 'signInUser';

  public static async execute(
    request: IDecoratedRequest<TUser>,
    h: ResponseToolkit
  ): Promise<any> {
    const { payload } = request;
    const response = await AuthService.SignIn.execute(payload);
    return response;
  }
}
