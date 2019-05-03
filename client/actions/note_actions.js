import * as APIUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_SELECTED_NOTE = 'RECEIVE_SELECTED_NOTE';

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveSelectedNote = note => ({
  type: RECEIVE_SELECTED_NOTE,
  note
});

export const fetchUserNotes = (user_id) => dispatch => (
  APIUtil.fetchUserNotes(user_id).then(notes => (
    dispatch(receiveNotes(notes))
  ))
);

export const fetchNotesByTags = (tags) => dispatch => (
  APIUtil.fetchNotesByTags(tags).then(notes => {
    return (dispatch(receiveNotes(notes)))
  })
);

export const createNote = (note) => dispatch => (
  APIUtil.createNote(note).then(() => (
    dispatch(fetchUserNotes(note.user_id))
  ))
);