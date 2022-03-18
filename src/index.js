import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import routers from '../routers';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import createRootReducer from './reducers'

export const history = createBrowserHistory();

const composeEnhancers = (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  createRootReducer(history),
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
      {routers.map(({path, component, exact}, index) => {
        return (
          <Route key={index} exact={exact} path={path} component={component} />
      )})}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);