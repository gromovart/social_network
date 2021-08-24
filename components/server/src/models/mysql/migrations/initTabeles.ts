import app from '../../../app';
import * as sql from './sql';

export const initTables = async () => {
  try {
    const conn = app.getMysqlConnection();
    const response = await conn.promise().query(sql.createTableUsers);
    if (response) {
      app.log(__filename).info('Таблица users создана');
    }
  } catch (err) {
    app.log(__filename).error(err);
  }
};
