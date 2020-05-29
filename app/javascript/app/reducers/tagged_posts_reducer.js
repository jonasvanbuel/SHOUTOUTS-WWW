import { FETCH_TAGGED_POSTS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case `${FETCH_TAGGED_POSTS}_FULFILLED`: {
      return action.payload;
    }
    default:
      return state;
  }
}
