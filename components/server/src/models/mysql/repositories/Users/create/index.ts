import app from '../../../../../app';
import User, { TUser } from '../../../entities/Users';
import { createUserSql } from '../../sql';

export default class Repository {
  public static readonly repositoryName = 'createUser';

  public static async exec(params: TUser): Promise<any> {
    try {
      const conn = app.getMysqlConnection();
      const user: User = new User(params);
      const response = await conn.promise().query(createUserSql(user));
      if (response) {
        return response;
      }
      throw new Error('Ошибка!');
    } catch (err) {
      app.log(__filename).error(err);
      app.generateHttpError(err);
    }
  }
}
