import app from '../../../../../app';
import BaseRepository from '../../../../../app/base/Repository';
// import { validateUser } from '../../../entities/Users';

type TServiceMeta = {
  error?: boolean;
};
class Repository extends BaseRepository {
  public async execute(
    params: any,
    meta: TServiceMeta = { error: true }
  ): Promise<any> {
    // console.log('HEyyy======', validateUser.raw());
    const { error } = meta;
    const { login } = params;
    const conn = app.getMysqlConnection();
    const filter = [login];
    const response: Array<Array<any>> = await conn
      .promise()
      .query(`SELECT * FROM users WHERE login=?`, filter);

    if (error && response[0].length < 1) {
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
