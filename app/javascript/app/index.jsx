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
import SignIn from './components/pages/signin';
import Dashboard from './components/dashboard';
import Livestream from './components/livestream';

// REDUCERS
import taggedPostsReducer from './reducers/tagged_posts_reducer';
import sortKeyReducer from './reducers/sort_key_reducer';
import sortOrderReducer from './reducers/sort_order_reducer';
import filteredReducer from './reducers/filtered_reducer';
import filterReducer from './reducers/filter_reducer';
import sortedFilteredPostsReducer from './reducers/sorted_filtered_posts_reducer';
import isLoggedInReducer from './reducers/is_logged_in_reducer';
import userReducer from './reducers/user_reducer';

const initialState = {
  isLoggedIn: false,
  user: {},
  taggedPosts: [],
  sortedFilteredPosts: [],
  sortKey: 'posted',
  sortOrder: 'desc',
  filtered: false,
  filter: ''
};

const reducers = combineReducers({
  isLoggedIn: isLoggedInReducer,
  user: userReducer,
  taggedPosts: taggedPostsReducer,
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
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/live" component={Livestream} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('react-root')
);
