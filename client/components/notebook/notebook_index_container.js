import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Notebook from './notebook_index';
import { receiveNotes, fetchUserNotes } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  notebooks: state.entities.notebooks,
  user: state.session
});

const mapDispatchToProps = dispatch => ({
  updateNotes: notes => dispatch(receiveNotes(notes)),
  fetchUserNotes: user_id => dispatch(fetchUserNotes(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
