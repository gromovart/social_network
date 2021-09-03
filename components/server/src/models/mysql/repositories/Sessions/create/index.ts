import app from '../../../../../app';
import BaseRepository from '../../../../../app/base/Repository';
import Session, { TSession } from '../../../entities/Sessions';
import QueryTool from '../../../lib/QueryTool';

type TServiceMeta = {
  error?: boolean;
};
class Repository extends BaseRepository {
  public async execute(
    params: TSession,
    meta: TServiceMeta = { error: true }
  ): Promise<any> {
    const conn = app.getMysqlConnection();
    const session: Session = new Session(params);
    const response = await conn
      .promise()
      .query(QueryTool.getSqlInsert('sessions', session));

    return response;
  }
}

export default new Repository({
  repositoryName: 'createSession',
  description: 'Создание сессии пользователя',
});
