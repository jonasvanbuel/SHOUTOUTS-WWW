// HELPERS
import {
  hidePostOptions,
  hidePostHidden,
  showPostHidden,
  hidePostHiddenOptions,
  showPostHiddenOverlay
} from '../components/post_dashboard/helpers';

// ====================
// VARIABLES
// ====================

const BASE_URL = '/api/v1';

export const FETCH_TAGGED_POSTS = 'FETCH_TAGGED_POSTS';
export const HIDE_POST = 'HIDE_POST';
export const UNHIDE_POST = 'UNHIDE_POST';
export const SET_SORT_KEY = 'SET_SORT_KEY';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_FILTERED = 'SET_FILTERED';
export const SET_FILTER = 'SET_FILTER';

// ====================
// ACTIONS
// ====================

export function fetchTaggedPosts(username) {
  const endpoint = `${BASE_URL}/tagged_posts/${username}`;
  const promise = fetch(endpoint, {
    credentials: "same-origin"
  })
    .then((r) => r.json());

  return {
    type: FETCH_TAGGED_POSTS,
    payload: promise
  };
}

export function hidePost(taggedPost) {
  // UPDATE DOM
  hidePostOptions(taggedPost);
  hidePostHiddenOptions(taggedPost);

  showPostHidden(taggedPost);
  showPostHiddenOverlay(taggedPost);

  // TODO: REMOVE EVENT LISTENER???


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
  hidePostHidden(taggedPost);
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
  return {
    type: SET_SORT_KEY,
    payload: sortKey
  };
}

export function setSortOrder(sortOrder) {
  return {
    type: SET_SORT_ORDER,
    payload: sortOrder
  };
}

export function setFiltered(string) {
  const regex = /\w|\W}\s/g;
  if (regex.test(string) === true) {
    return {
      type: SET_FILTERED,
      payload: true
    };
  }
  if (string === '') {
    return {
      type: SET_FILTERED,
      payload: false
    };
  }
  return {
    type: SET_FILTERED,
    payload: false
  };
}

export function setFilter(string) {
  return {
    type: SET_FILTER,
    payload: string
  };
}
