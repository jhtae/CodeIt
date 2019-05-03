import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterBar from './filter_bar';
import { fetchNotesByTags } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: state.entities.notes,
  tags: ownProps.tags,
  updateFilters: ownProps.updateFilters
});

const mapDispatchToProps = dispatch => ({
  fetchNotesByTags: (tags) => dispatch(fetchNotesByTags(tags))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
