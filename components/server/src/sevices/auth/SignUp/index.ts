import app from '../../../app';
import BaseService from '../../../app/lib/Service';
import AuthRepository from '../../../models/mysql/repositories/Users';
import User, { TUser } from '../../../models/mysql/entities/Users';

type TServiceParams = {} & TUser;

type TServiceMeta = {};

type TServiceReturn = Promise<any>;

class Service extends BaseService {
  public static serviceName = 'signUpUser';

  public async execute(params: any, meta: TServiceMeta = {}): TServiceReturn {
    app.log(__filename).info(params);
    try {
      const user = await AuthRepository.createUser.execute(params);
      console.log('asdasdasd', user);
      return user;
    } catch (err) {
      app.log(__filename).error(err.message);
      return app.generateHttpError(err);
    }
  }
}

export default new Service({ serviceName: 'signInUser', description: '' });
