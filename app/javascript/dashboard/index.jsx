/* eslint no-alert:off */

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import Dashboard from './components/dashboard';

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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
