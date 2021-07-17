import app from '../../../app';

export default class Controller {
  /**
   * Контроллер для обработки маршрута идентификации пользователя
   */
  public static readonly className = 'signUp';

  public static async exec(params: any) {
    app.log.info(this.className);
  }
}
