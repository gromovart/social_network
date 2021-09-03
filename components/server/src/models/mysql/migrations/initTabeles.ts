import app from '../../../app';
import * as sql from './sql';

export const initTables = async () => {
  try {
    const conn = app.getMysqlConnection();
    await conn.promise().query(sql.createTableUsers);
    app.log(__filename).info('Таблица users создана!');
    await conn.promise().query(sql.createTableSessions);
    app.log(__filename).info('Таблица sessions создана!');
  } catch (err) {
    app.log(__filename).error(err);
  }
};
