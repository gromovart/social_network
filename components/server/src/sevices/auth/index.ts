import app from '../../app';

export default class Service {
  public static serviceName = 'signInUser';

  public static async signUpUser(params: any, meta: any): Promise<any> {
    const conn = app.getMysqlConnection();

    const { login, password } = params;
    conn.query('SELECT * FROM USERS WHERE login=:login');
    app.log(__filename).info(params);
    return {};
  }
}
