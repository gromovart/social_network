import app from '../../../../../app';
import { validateUser } from '../../../entities/Users';

export default class Repository {
  public static readonly repositoryName = 'readByLoginUser';

  // TSignUp
  public static async exec(params: any): Promise<any> {
    console.log('HEyyy======', validateUser.raw);
    try {
      const { login } = params;
      const conn = app.getMysqlConnection();
      const response = await conn
        .promise()
        .query(`SELECT * FROM users WHERE login=${login}`);
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
