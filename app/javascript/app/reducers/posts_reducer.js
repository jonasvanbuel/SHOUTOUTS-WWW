import { FETCH_POSTS, HIDE_POST, UNHIDE_POST } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case `${FETCH_POSTS}_FULFILLED`: {
      return action.payload;
    }
    case `${HIDE_POST}_FULFILLED`: {
      return action.payload;
    }
    case `${UNHIDE_POST}_FULFILLED`: {
      return action.payload;
    }
    default:
      return state;
  }
}
