import React from 'react';
import { connect } from 'react-redux';

import NotebookForm from './notebook_form_container';
import { fetchNotesByTags } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm);
