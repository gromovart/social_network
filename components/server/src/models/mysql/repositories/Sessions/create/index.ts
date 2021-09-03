import app from '../../../../../app';
import BaseRepository from '../../../../../app/lib/Repository';
import Session, { TSession } from '../../../entities/Sessions';
import { createUserSql } from '../../sql';

class Repository extends BaseRepository {
  public async execute(params: TSession): Promise<any> {
    const conn = app.getMysqlConnection();
    const session: Session = new Session(params);
    const response = await conn.promise().query(createUserSql(session));

    return response;
  }
}

export default new Repository({
  repositoryName: 'createSession',
  description: 'Создание сессии пользователя',
});
