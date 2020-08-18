import { History, Location } from 'history';
import { match } from 'react-router-dom';
import { Store } from 'stores/index';

export interface StoreProps extends Store {
  [key: string]: unknown;
}

export interface ContainerProps extends StoreProps {
  history?: History;
  location?: Location;
  match?: match;
}
