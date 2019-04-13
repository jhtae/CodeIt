import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NoteIndex from './note_index';

const mapStateToProps = (state) => {
  return {
    notes: state.entities.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
