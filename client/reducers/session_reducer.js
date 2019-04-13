import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {
        id: action.currentUser.id,
        username: action.currentUser.username
      } 
      return merge({}, state, newState)
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
