import app from '../../../../../app';
import BaseRepository from '../../../../../app/lib/Repository';
import User, { TUser } from '../../../entities/Users';
import { createUserSql } from '../../sql';

class Repository extends BaseRepository {
  public async execute(params: TUser): Promise<any> {
    const conn = app.getMysqlConnection();
    const user: User = new User({ ...params });
    const response = await conn.promise().query(createUserSql(user));

    return response;
  }
}

export default new Repository({
  repositoryName: 'createUser',
  description: '',
});
