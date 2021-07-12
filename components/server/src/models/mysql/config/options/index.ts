import { MSQL_HOST, MSQL_PASSWORD, MSQL_USER } from '../env';

const connectionOptions = {
  host: MSQL_HOST,
  user: MSQL_USER,
  password: MSQL_PASSWORD,
};

export default connectionOptions;
