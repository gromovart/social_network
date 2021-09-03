import app from '../../../../../app';
import BaseRepository from '../../../../../app/lib/Repository';
// import { validateUser } from '../../../entities/Users';

type TServiceMeta = {
  error?: boolean;
};
class Repository extends BaseRepository {
  public async execute(params: any, meta: TServiceMeta): Promise<any> {
    // console.log('HEyyy======', validateUser.raw());
    const { error } = meta;
    const { token } = params;
    const conn = app.getMysqlConnection();
    const filter = [token];
    const response: Array<Array<any>> = await conn
      .promise()
      .query(`SELECT * FROM sessions WHERE token=?`, filter);

    if (error && response[0].length < 1) {
      throw new Error('Ошибка! Сессия не найдена!');
    }
    const data = response[0][0];
    return data;
  }
}

export default new Repository({
  repositoryName: 'getSessionByToken',
  description: '',
});
