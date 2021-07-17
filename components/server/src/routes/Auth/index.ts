import controllers from '../../controllers/Auth';

export default class Route {
  /**
   * Endpoints для работы с авторизацией
   */
  public static readonly className = 'auth';

  public static get() {
    return [
      {
        method: 'GET',
        path: '/petstore',
        options: {
          handler: controllers.Auth.authUser,
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
