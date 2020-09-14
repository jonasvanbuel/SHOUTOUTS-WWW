// ====================
// HELPERS
// ====================

import {
  hidePostOptions,
  hidePostHidden,
  showPostHidden,
  hidePostHiddenOptions,
  showPostHiddenOverlay,
  reviewScroll
} from '../components/post_dashboard/helpers';
import sortPosts from '../helpers/_sort_posts';
import filterPosts from '../helpers/_filter_posts';

// ====================
// VARIABLES
// ====================

const BASE_URL = '/api/v1';

export const FETCH_POSTS = 'FETCH_POSTS';
export const HIDE_POST = 'HIDE_POST';
export const UNHIDE_POST = 'UNHIDE_POST';
export const SET_SORT_KEY = 'SET_SORT_KEY';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_FILTERED = 'SET_FILTERED';
export const SET_FILTER = 'SET_FILTER';
export const UPDATE_SORTED_FILTERED_POSTS = 'UPDATE_SORTED_FILTERED_POSTS';

// ====================
// ACTIONS
// ====================

export function updateSortedFilteredPosts() {
  reviewScroll();

  return (dispatch, getState) => {
    const {
      taggedPosts,
      sortKey,
      sortOrder,
      filtered,
      filter
    } = getState();

    const filteredPosts = filtered === true ? filterPosts(taggedPosts, filtered, filter) : taggedPosts;
    const sortedFilteredPosts = sortPosts(filteredPosts, sortKey, sortOrder);

    dispatch({
      type: UPDATE_SORTED_FILTERED_POSTS,
      payload: sortedFilteredPosts
    });
  };
}

export function hidePost(taggedPost) {
  // UPDATE DOM
  hidePostOptions(taggedPost);
  hidePostHiddenOptions(taggedPost);
  showPostHiddenOverlay(taggedPost);

  const body = {
    type: HIDE_POST,
    instagram_account_id: taggedPost.instagram_account_id,
    post_id: taggedPost.id
  };

  const endpoint = `${BASE_URL}/tagged_posts/update_hidden`;
  const promise = fetch(endpoint, {
    method: 'PATCH',
    credentials: "same-origin",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then((r) => r.json());

  return {
    type: HIDE_POST,
    payload: promise
  };
}

export function unhidePost(taggedPost) {
  // Update DOM
  // hidePostHidden(taggedPost);
  hidePostHiddenOptions(taggedPost);

  const body = {
    type: UNHIDE_POST,
    instagram_account_id: taggedPost.instagram_account_id,
    post_id: taggedPost.id
  };

  const endpoint = `${BASE_URL}/tagged_posts/update_hidden`;
  const promise = fetch(endpoint, {
    method: 'PATCH',
    credentials: "same-origin",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then((r) => r.json());

  return {
    type: UNHIDE_POST,
    payload: promise
  };
}

export function setSortKey(sortKey) {
  // SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    dispatch({
      type: SET_SORT_KEY,
      payload: sortKey
    });

    dispatch(
      updateSortedFilteredPosts()
    );
  };
}

export function setSortOrder(sortOrder) {
  // SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    dispatch({
      type: SET_SORT_ORDER,
      payload: sortOrder
    });

    dispatch(
      updateSortedFilteredPosts()
    );
  };
}

export function setFiltered(string) {
  // SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    const regex = /\w|\W}\s/g;
    if (regex.test(string) === true) {
      dispatch({
        type: SET_FILTERED,
        payload: true
      });
    }
    if (string === '') {
      dispatch({
        type: SET_FILTERED,
        payload: false
      });
    }

    // dispatch(
    //   updateSortedFilteredPosts()
    // );
  };
}

export function setFilter(string) {
  // UPDATE DOM
  reviewScroll();

  // SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    dispatch({
      type: SET_FILTER,
      payload: string
    });

    dispatch(
      updateSortedFilteredPosts()
    );
  };
}

export function fetchPosts() {
  // A-SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    const endpoint = `${BASE_URL}/user_posts`;
    const promise = fetch(endpoint, {
      credentials: "same-origin"
    })
      .then((r) => r.json());

    const response = dispatch({
      type: FETCH_POSTS,
      payload: promise
    });

    // Async second action call
    response.then(() => {
      dispatch(updateSortedFilteredPosts());
    });
  };
}
