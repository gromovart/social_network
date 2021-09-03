import Route from '../../../base/Route';
import options from './config/options';

export const description = 'Авторизация пользователя в ситеме';

export default new Route({
  routeName: 'SignIn',
  method: 'POST',
  path: '/sign-in',
  description,
  options,
});
