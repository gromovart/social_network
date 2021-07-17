import { MSQL_HOST, MSQL_PASSWORD, MSQL_USER, MSQL_DB_NAME } from '../env';

const connectionOptions = {
  host: MSQL_HOST,
  user: MSQL_USER,
  password: MSQL_PASSWORD,
  database: MSQL_DB_NAME,
};

export default connectionOptions;
