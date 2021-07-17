import { baseLoggerInstance as logger } from '../../../shared/lib/logger';
import app from '../../../app';

class Controller {
  /**
   * Контроллер для авторизации в приложении
   */

  public static async authUser(request: any) {
    app.log(__filename).info('HEY');
    return {};
  }
}

export default Controller;
