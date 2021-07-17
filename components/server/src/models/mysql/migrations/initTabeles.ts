import app from '../../../app';

export const initTables = async () => {
  try {
    const conn = app.getMysqlConnection();
    const sql = `create table if not exists users(
    id int primary key auto_increment,
    name varchar(255) not null,
    age int not null
  )`;
    const response = conn.query(sql);
    if (response) {
      app.log.info('Таблица создана');
    }
    conn.end();
  } catch (err) {
    app.log.error(err);
  }
};
