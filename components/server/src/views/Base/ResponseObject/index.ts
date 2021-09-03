import View from '../../../app/base/View';

class ResponseObjectView extends View {
  public create(params: any) {
    const response = {
      data: { ...params },
    };
    return response;
  }
}

export default new ResponseObjectView({
  viewName: 'ResponseObject',
  description: '',
});
