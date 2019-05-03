import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NoteForm from './note_form';
import { createNote } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  selectedNote: state.entities.selectedNote,
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createNote: (note) => dispatch(createNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
