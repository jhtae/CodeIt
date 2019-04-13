import merge from 'lodash/merge';

import { RECEIVE_USER_NOTES } from '../actions/note_actions';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER_NOTES:
      return merge([], state, action.notes);
    default:
      return state;
  }
};

export default notesReducer;
