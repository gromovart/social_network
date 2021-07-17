import app from '../../../app';

export default class Controller {
  /**
   * Контроллер для обработки маршрута регистрации пользователя
   */
  public static readonly className = 'signIn';

  public static async exec(params: any) {
    app.log.info(this.className);
  }
}
