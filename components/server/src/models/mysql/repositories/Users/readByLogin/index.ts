import app from '../../../../../app';
import BaseRepository from '../../../../../app/lib/Repository';
// import { validateUser } from '../../../entities/Users';

class Repository extends BaseRepository {
  public async execute(params: any): Promise<any> {
    // console.log('HEyyy======', validateUser.raw());
    const { login } = params;
    const conn = app.getMysqlConnection();
    const response = await conn
      .promise()
      .query(`SELECT * FROM users WHERE login=${login}`);
    return response;
  }
}

export default new Repository({
  repositoryName: 'readByLoginUser',
  description: '',
});
