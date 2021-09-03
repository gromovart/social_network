import View from '../../../app/base/View';

class ResponseArrayView extends View {
  public create(params: any) {
    const response = {
      data: [...params],
    };
    return response;
  }
}

export default new ResponseArrayView({
  viewName: 'ResponseArray',
  description: '',
});
