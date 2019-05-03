import * as APIUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const fetchNotebooks = (user_id) => dispatch => (
  APIUtil.fetchNotebooks(user_id).then(notebooks => (
    dispatch(receiveNotebooks(notebooks))
  ))
);

export const fetchNotebooksByUser = (user_id) => dispatch => (
  APIUtil.fetchNotebooksByUser(user_id).then(
    notebooks => dispatch(receiveNotebooks(notebooks))
  )
);

export const createNotebook = (notebook) => dispatch => (
  APIUtil.createNotebook(notebook).then(() => (
    dispatch(fetchNotebook(notebook.user_id))
  ))
);