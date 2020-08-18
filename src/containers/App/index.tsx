import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Routers from '../../router';
import styles from './index.less';
import { ContainerProps } from 'src/interface';

const App: React.FC = (props: ContainerProps) => {
  return (
    <div id="app">
      <div className={styles.content}>
        <Routers {...props} />
      </div>
    </div>
  );
}
export default withRouter(App)
