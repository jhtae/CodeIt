import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './sidebar';
import { fetchNotebooksByUser } from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: ownProps.selected,
    user: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchNotebooksByUser: (user_id) => dispatch(fetchNotebooksByUser(user_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
