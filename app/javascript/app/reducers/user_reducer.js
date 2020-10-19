import { FETCH_USER } from '../actions/user_actions';

export default function(state = null, action) {
  switch (action.type) {
    case `${FETCH_USER}_FULFILLED`: {
      return action.payload;
    }
    default:
      return state;
  }
}
