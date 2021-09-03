import Route from '../../../base/Route';
import options from './config/options';

export const description = 'Регистрация пользователя в ситеме';

export default new Route({
  routeName: 'SignUp',
  description,
  method: 'POST',
  path: '/sign-up',
  options,
});
