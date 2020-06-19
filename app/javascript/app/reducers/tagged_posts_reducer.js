import { FETCH_TAGGED_POSTS, HIDE_POST } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case `${FETCH_TAGGED_POSTS}_FULFILLED`: {
      return action.payload;
    }
    case `${HIDE_POST}_FULFILLED`: {
      return action.payload;
    }
    default:
      return state;
  }
}
