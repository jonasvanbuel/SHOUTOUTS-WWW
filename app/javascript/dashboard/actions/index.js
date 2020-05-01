const BASE_URL = '/api/v1';

export const FETCH_TAGGED_POSTS = 'FETCH_TAGGED_POSTS';

export function fetchTaggedPosts(username) {
  const endpoint = `${BASE_URL}/tagged_posts/${username}`;
  const promise = fetch(endpoint, { credentials: "same-origin" }).then(r => r.json())
  return {
    type: FETCH_TAGGED_POSTS,
    payload: promise
  };
}
