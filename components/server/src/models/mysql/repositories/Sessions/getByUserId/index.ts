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
    const { error } = meta;
    const { userId } = params;
    const conn = app.getMysqlConnection();
    const filter = [userId];
    const response: Array<Array<any>> = await conn
      .promise()
      .query(`SELECT * FROM sessions WHERE userId=?`, filter);

    if (error && response[0].length < 1) {
      throw new Error('Ошибка! Сессия не найдена!');
    }
    const data = response[0][0];
    return data;
  }
}

export default new Repository({
  repositoryName: 'getSessionByUserId',
  description: '',
});
