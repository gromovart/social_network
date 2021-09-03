import crypto from 'crypto';
import app from '../../../app';
import BaseService from '../../../app/base/Service';
import AuthRepository from '../../../models/mysql/repositories/Users';
import User, { TUser } from '../../../models/mysql/entities/Users';

type TServiceParams = {} & TUser;

type TServiceMeta = {
  error?: boolean;
};

type TServiceReturn = Promise<any>;

class Service extends BaseService {
  public static serviceName = 'signUpUser';

  public async execute(params: any, meta: TServiceMeta = {}): TServiceReturn {
    app.log(__filename).info(params);
    try {
      const { login, password, ...rest } = params;

      const foudedUser = await AuthRepository.getUserByLogin.execute(
        {
          login,
        },
        { ...meta, error: false }
      );

      if (foudedUser) {
        throw new Error(
          'Ошибка! Пользователь с таким Email уже зарегистрирован!'
        );
      }
      const salt = crypto.randomBytes(32).toString('hex');

      const hash = crypto
        .pbkdf2Sync(params.password, salt, 8, 64, 'sha512')
        .toString('hex');

      const userCreated = await AuthRepository.createUser.execute({
        ...rest,
        login,
        password: hash,
        salt,
      });

      const userId = userCreated[0].insertId;

      const user = await AuthRepository.getUserById.execute(
        {
          id: userId,
        },
        { error: false }
      );
      delete user.password;
      delete user.salt;
      return user;
    } catch (err) {
      app.log(__filename).error(err.message);
      return app.generateHttpError(err);
    }
  }
}

export default new Service({ serviceName: 'signInUser', description: '' });
