import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TagIndex from './tag_index';
// import { removeNoteTag } from '../../actions/note_actions';
import { fetchNotesByTags } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
  tags: ownProps.tags,
  currentNote: ownProps.note,
  updateFilters: ownProps.updateFilters
});

const mapDispatchToProps = dispatch => ({
  filterNotesByTags: tags => dispatch(fetchNotesByTags(tags)),
  // removeNoteTag: dispatch((note_id, tag) => removeNoteTag(note_id, tag))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);
