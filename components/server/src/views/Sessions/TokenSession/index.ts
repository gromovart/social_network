import View from '../../../app/base/View';

class TokenView extends View {
  public create(params: any) {
    const response = {
      token: params.token,
    };
    return response;
  }
}

export default new TokenView({ viewName: '', description: '' });
