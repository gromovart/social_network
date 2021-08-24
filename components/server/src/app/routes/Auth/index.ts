import Joi from 'joi';
import AuthControllers from '../../../controllers/Auth';

export default class Route {
  /**
   * Endpoints для работы с авторизацией
   */
  public static readonly className = 'auth';

  public static get() {
    return [
      {
        method: 'POST',
        path: '/sign-in',
        options: {
          validate: {
            payload: <any>Joi.object().keys({
              firstName: Joi.string().required(),
              lastName: Joi.string().required(),
              login: Joi.string().required(),
              password: Joi.string().required(),
              age: Joi.number().required(),
              avatar: Joi.string().required(),
            }),
          },
          handler: AuthControllers.signInUser,
          description: 'Array properties',
          tags: ['api', 'petstore'],
          plugins: {
            'hapi-swagger': {
              order: 2,
            },
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
      },
      {
        method: 'POST',
        path: '/sign-up',
        options: {
          validate: {
            payload: <any>Joi.object().keys({
              login: Joi.string().required(),
              password: Joi.string().required(),
            }),
          },
          handler: AuthControllers.signUpUser,
          description: 'Array properties',
          tags: ['api', 'petstore'],
          plugins: {
            'hapi-swagger': {
              order: 2,
            },
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
      },
    ];
  }
}
