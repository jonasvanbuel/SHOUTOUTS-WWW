import { fetchPostOptions, fetchPostHidden } from '../animation_dashboard';

const BASE_URL = '/api/v1';

export const FETCH_TAGGED_POSTS = 'FETCH_TAGGED_POSTS';
export const HIDE_POST = 'HIDE_POST';
export const UNHIDE_POST = 'UNHIDE_POST';

// Internal helper functions
const hidePostOptions = (taggedPost) => {
  const postOptions = fetchPostOptions(taggedPost);
  if (!postOptions.classList.contains('invisible')) {
    postOptions.classList.add('invisible');
  }
};

const hidePostHidden = (taggedPost) => {
  const postHidden = fetchPostHidden(taggedPost);
  if (!postHidden.classList.contains('invisible')) {
    postHidden.classList.add('invisible');
  }
};

// ACTIONS
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
  hidePostOptions(taggedPost);

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
  // hidePostOptions(taggedPost);
  hidePostHidden(taggedPost);
  // debugger

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
