import crypto from 'crypto';
import app from '../../../app';
import BaseService from '../../../app/base/Service';
import UsersRepository from '../../../models/mysql/repositories/Users';
import SessionsRepository from '../../../models/mysql/repositories/Sessions';
import Views from '../../../views';

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
      const user = await UsersRepository.getUserByLogin.execute(
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

      const token = crypto
        .pbkdf2Sync(
          password,
          crypto.randomBytes(16).toString(),
          1,
          32,
          'sha256'
        )
        .toString('hex');

      const responseRepository = await SessionsRepository.createSession.execute(
        { token, userId: user.id, blocked: false },
        { ...meta, error: false }
      );

      const sessionId = responseRepository[0].insertId;

      const session = await SessionsRepository.getSessionById.execute(
        { id: sessionId },
        { ...meta, error: false }
      );
      const response = Views.BaseViews.ResponseObject.create({
        token: session.token,
      });

      return response;
    } catch (err) {
      app.log(__filename).error(err.message);
      return app.generateHttpError(err);
    }
  }
}

export default new Service({ serviceName: 'signInUser', description: '' });
