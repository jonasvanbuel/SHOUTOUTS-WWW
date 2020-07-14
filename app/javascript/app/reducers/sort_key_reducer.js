import { SET_SORT_KEY } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SORT_KEY: {
      return action.payload;
    }
    default:
      return state;
  }
}
