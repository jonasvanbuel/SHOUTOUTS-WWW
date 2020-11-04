// import fetchPosts from './index';

// VARIABLES
const BASE_URL = '/api/v1';
export const FETCH_USER = 'FETCH_USER';


// ACTIONS
export function fetchUser() {
  const body = {
    device_width: window.innerWidth
  };

  // A-SYNCHRONOUS action dispatching using redux-thunks
  return (dispatch) => {
    const endpoint = `${BASE_URL}/user`;
    const promise = fetch(endpoint, {
      method: 'PATCH',
      credentials: "same-origin",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then((r) => r.json());

    const response = dispatch({
      type: FETCH_USER,
      payload: promise
    });

    // Async second action call
    // response.then(() => {
    //   dispatch(fetchPosts());
    // });
  };
}
