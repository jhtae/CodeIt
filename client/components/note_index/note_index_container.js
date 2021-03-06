import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NoteIndex from './note_index';
import { receiveSelectedNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
  updateFilters: ownProps.updateFilters
});

const mapDispatchToProps = dispatch => ({
  updateSelectedNote: (note) => dispatch(receiveSelectedNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
