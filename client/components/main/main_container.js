import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Main from './main';
import { fetchUserNotes } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  user: state.session,
  notes: state.entities.notes,
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  fetchUserNotes: (user_id) => dispatch(fetchUserNotes(user_id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
