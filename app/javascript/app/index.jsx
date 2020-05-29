/* eslint no-alert:off */

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// internal modules
import DashboardContainer from './components/dashboard_container';
import Livestream from './containers/livestream';

// state and reducers
import taggedPostsReducer from './reducers/tagged_posts_reducer';

const initialState = {
  taggedPosts: []
};

const reducers = combineReducers({
  taggedPosts: taggedPostsReducer
});

const middlewares = applyMiddleware(logger, promise);
const store = createStore(reducers, initialState, middlewares);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" exact component={DashboardContainer} />
        <Route path="/live" component={Livestream} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
