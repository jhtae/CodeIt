import * as APIUtil from '../util/note_api_util';

export const RECEIVE_USER_NOTES = 'RECEIVE_USER_NOTES';

export const receiveUserNotes = notes => ({
  type: RECEIVE_USER_NOTES,
  notes
});

export const fetchUserNotes = (user_id) => dispatch => (
  APIUtil.fetchUserNotes(user_id).then(notes => (
    dispatch(receiveUserNotes(notes))
  ))
);

export const createNote = (note) =>  dispatch => (
  APIUtil.createNote(note).then(() => (
    dispatch(fetchUserNotes(note.user_id))
  ))
);