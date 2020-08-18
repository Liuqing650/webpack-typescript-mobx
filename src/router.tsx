import * as React from 'react';
import { Route, Switch, RouteProps } from 'react-router-dom';
import HomePage from './containers/HomePage';
import { ContainerProps } from './interface';

const { lazy, Suspense } = React;

function Loading() {
  return <div>Loading...</div>
}

const FirstPage = lazy(() => import(/* webpackChunkName: 'FirstPage' */ './containers/FirstPage'));

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '/page',
    component: FirstPage
  },
];

const Routers = (appProps: ContainerProps) => (
  <Suspense fallback={<Loading/>}>
    <Switch>
      {
        routes.map((route: RouteProps) => {
          const {path, exact, component: LazyCom} = route;
          return <Route key={path + ''} exact={!!exact} path={path} render={(props: any) => (<LazyCom {...props} {...appProps}/>)}/>
        })
      }
    </Switch>
  </Suspense>
)
export default Routers;
