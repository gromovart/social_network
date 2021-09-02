import app from '../../../../../app';
import BaseRepository from '../../../../../app/lib/Repository';
// import { validateUser } from '../../../entities/Users';

class Repository extends BaseRepository {
  public async execute(params: any): Promise<any> {
    // console.log('HEyyy======', validateUser.raw());

    const { login } = params;
    const conn = app.getMysqlConnection();
    const filter = [login];
    const response: Array<Array<any>> = await conn
      .promise()
      .query(`SELECT * FROM users WHERE login=?`, filter);

    if (response[0].length < 1) {
      throw new Error('Ошибка! Пользователь не найден!');
    }
    const data = response[0][0];
    return data;
  }
}

export default new Repository({
  repositoryName: 'readByLoginUser',
  description: '',
});
