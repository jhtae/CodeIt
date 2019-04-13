import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './sidebar';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: ownProps.selected,
    user: state.session,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
