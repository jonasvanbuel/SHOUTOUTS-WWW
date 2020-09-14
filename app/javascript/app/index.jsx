/* eslint no-alert:off */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// COMPONENTS
import Dashboard from './components/dashboard';
import Livestream from './components/livestream';

// REDUCERS
import postsReducer from './reducers/posts_reducer';
import sortKeyReducer from './reducers/sort_key_reducer';
import sortOrderReducer from './reducers/sort_order_reducer';
import filteredReducer from './reducers/filtered_reducer';
import filterReducer from './reducers/filter_reducer';
import sortedFilteredPostsReducer from './reducers/sorted_filtered_posts_reducer';

const initialState = {
  posts: [],
  sortedFilteredPosts: [],
  sortKey: 'posted',
  sortOrder: 'desc',
  filtered: false,
  filter: ''
};

const reducers = combineReducers({
  posts: postsReducer,
  sortedFilteredPosts: sortedFilteredPostsReducer,
  sortKey: sortKeyReducer,
  sortOrder: sortOrderReducer,
  filtered: filteredReducer,
  filter: filterReducer
});

const middlewares = applyMiddleware(logger, promise, thunk);
const store = createStore(reducers, initialState, middlewares);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/live" exact component={Livestream} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
