import { SET_FILTERED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_FILTERED: {
      return action.payload;
    }
    default:
      return state;
  }
}
