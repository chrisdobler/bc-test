import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import { routerMiddleware, push } from 'react-router-redux';

import App from './components/app';
import reducers from './reducers';
import rootSaga from './sagas'

import SearchPage from './components/search_page';
import PeopleShow from './components/people_show';
import PlanetsShow from './components/planets_show';

const sagaMiddleware = createSagaMiddleware()
const RouterMiddleware = routerMiddleware(browserHistory)

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  RouterMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducers)
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/people/:id" component={PeopleShow} />
          <Route path="/planet/:id" component={PlanetsShow} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

export default store;