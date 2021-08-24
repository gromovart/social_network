import { Request } from '@hapi/hapi';
import app from '../../../app';
import { TUser } from '../../../models/mysql/entities/Users';
import UserRepository from '../../../models/mysql/repositories/Users';

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

  public static async signInUser(
    request: IDecoratedRequest<TUser>
  ): Promise<any> {
    try {
      const { payload } = request;
      const user = await UserRepository.createUser.exec(payload);
      return user;
    } catch (error) {
      app.generateHttpError(error);
      app.log(__filename).error(error);
    }
  }
}
