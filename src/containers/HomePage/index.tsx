import * as React from 'react';
import { observer, inject} from 'mobx-react';
import { Button } from 'antd';
import { ContainerProps } from 'src/interface';

@inject('homeStore')
@observer
export default class HomePage extends React.Component<ContainerProps, any> {
  componentDidMount() {
    this.onRequest();
  }
  onRequest = () => {
    this.props.homeStore.loadingData();
  }
  onPage = () => {
    this.props.history.push('/page');
  };
  onRequestTest = () => {
    this.props.homeStore.requestApi();
  };
  render() {
    const { msg } = this.props.homeStore;
    return (
      <div>
        <div>HomePage</div>
        <div>msg: {msg}</div>
        <Button type="primary" onClick={this.onRequest}>发起请求</Button>
        <Button type="primary" onClick={this.onPage}>进入page</Button>
        <br />
        <Button onClick={this.onRequestTest}>测试请求</Button>
      </div>
    );
  }
}
