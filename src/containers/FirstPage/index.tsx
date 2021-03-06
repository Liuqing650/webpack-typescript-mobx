import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'antd';
import history from 'helpers/history';

@observer
export default class FirstPage extends React.Component {
  render() {
    const onBack = () => {
      history.push('/');
      // this.props.history.push('/');
    };
    return (
      <div>
        FirstPage
        <Button type="primary" onClick={onBack}>返回主页</Button>
      </div>
    );
  }
}
