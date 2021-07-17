import app from '../../../app';

export default class Controller {
  /**
   * Контроллер для обработки маршрута выхода из системы
   */
  public static readonly className = 'signOut';

  public static async exec(params: any) {
    app.log.info(this.className);
  }
}
