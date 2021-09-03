import app from '../../../../../app';
import BaseRepository from '../../../../../app/base/Repository';
import User, { TUser } from '../../../entities/Users';
import QueryTool from '../../../lib/QueryTool';

type TServiceMeta = {
  error?: boolean;
};
class Repository extends BaseRepository {
  public async execute(
    params: TUser,
    meta: TServiceMeta = { error: true }
  ): Promise<any> {
    const conn = app.getMysqlConnection();
    const user: User = new User({ ...params });
    const response = await conn
      .promise()
      .query(QueryTool.getSqlInsert('users', user));

    return response;
  }
}

export default new Repository({
  repositoryName: 'createUser',
  description: '',
});
