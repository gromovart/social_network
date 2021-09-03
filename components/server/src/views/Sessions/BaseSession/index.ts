import View from '../../../app/base/View';

class SessionBaseView extends View {
  public create(params: any) {
    const response = {
      ...params,
    };
    return response;
  }
}

export default new SessionBaseView({ viewName: '', description: '' });
