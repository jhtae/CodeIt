import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = {
        id: action.currentUser.id,
        username: action.currentUser.username
      } 
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default usersReducer;
