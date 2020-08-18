import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import browserHistory from 'helpers/history';
import { creatStore } from 'stores/index';
import App from './containers/App';

const store = creatStore();

ReactDOM.render(
  <Provider {...store}>
    <Router history={browserHistory}>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </Router>
  </Provider>, document.getElementById('root'));
