import merge from 'lodash/merge';

import { RECEIVE_NOTEBOOKS } from '../actions/notebook_actions';

const notebooksReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge([], action.notebooks);
    default:
      return state;
  }
};

export default notebooksReducer;
