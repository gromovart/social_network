import crypto from 'crypto';
import app from '../../../app';
import BaseService from '../../../app/lib/Service';
import AuthRepository from '../../../models/mysql/repositories/Users';

type TServiceParams = {
  login: string;
  password: string;
};

type TServiceMeta = {
  error?: boolean;
};

type TServiceReturn = Promise<any>;

class Service extends BaseService {
  public static serviceName = 'signInUser';

  public async execute(
    params: TServiceParams,
    meta: TServiceMeta = {}
  ): TServiceReturn {
    const { login, password } = params;
    // app.log(__filename).info(params);
    try {
      const user = await AuthRepository.getUserByLogin.execute(
        { login },
        { ...meta, error: false }
      );

      if (!user) {
        throw new Error('Произошла ошибка! Неверный логин или пароль!');
      }

      const { salt } = user;

      const hash = crypto
        .pbkdf2Sync(password, salt, 8, 64, 'sha512')
        .toString('hex');

      const isValid = hash === user.password;

      if (!isValid) {
        throw new Error('Произошла ошибка! Неверный логин или пароль!');
      }

      return user;
    } catch (err) {
      app.log(__filename).error(err.message);
      return app.generateHttpError(err);
    }
  }
}

export default new Service({ serviceName: 'signInUser', description: '' });
