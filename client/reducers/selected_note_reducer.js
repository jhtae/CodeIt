import merge from 'lodash/merge';

import { RECEIVE_SELECTED_NOTE } from '../actions/note_actions';

const selectedNoteReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_NOTE:
      return merge({}, action.note);
    default:
      return state;
  }
};

export default selectedNoteReducer;
