import AuthControllers from '../../../../../controllers/Auth';
import * as V from './validation';
import { description } from '../index';

export default {
  validate: { payload: V.validateSignIn },
  handler: AuthControllers.SignInUser.execute,
  description,
  tags: ['api', 'petstore'],
  plugins: {
    'hapi-swagger': {
      order: 2,
      responses: {
        200: {
          description: 'Ошибок нет',
        },
        400: {
          description: 'Возвращает ошибку',
        },
      },
    },
  },
};
