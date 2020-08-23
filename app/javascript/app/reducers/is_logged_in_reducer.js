import { GET_LOGIN_STATUS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case `${GET_LOGIN_STATUS}_FULFILLED`: {
      return action.payload.logged_in;
    }
    default:
      return state;
  }
}
