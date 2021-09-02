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
        { ...meta, error: true }
      );
      return user;
    } catch (err) {
      app.log(__filename).error(err.message);
      return app.generateHttpError(err);
    }
  }
}

export default new Service({ serviceName: 'signInUser', description: '' });
