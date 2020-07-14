import { SET_SORT_ORDER } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SORT_ORDER: {
      return action.payload;
    }
    default:
      return state;
  }
}
