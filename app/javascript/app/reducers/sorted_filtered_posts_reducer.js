import { UPDATE_SORTED_FILTERED_POSTS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_SORTED_FILTERED_POSTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
