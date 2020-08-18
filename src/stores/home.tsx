import { observable, action } from 'mobx';
import { setPathValue } from 'pathval';
import { message } from 'antd';
import { testApi } from 'api/index';

export class HomeStore {
  @observable msg = 'init store...';
  @observable loading = false;

  @action.bound setValue(path, value) {
    setPathValue(this, path, value);
  }

  @action.bound loadingData(): void {
    if (this.loading) {
      message.info('已经在加载中，请不要重复点击');
      return null;
    }
    this.msg = 'loading'
    this.loading = true;
    setTimeout(() => {
      this.msg = 'success'
      this.loading = false;
    }, 2000)
  }

  @action.bound requestApi() {
    testApi.getUser()
      .then(resp => {
        console.log('resp-------->', resp);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default new HomeStore() as HomeStore;
