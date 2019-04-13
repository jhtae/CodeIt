import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import App from './app';

const mapStateToProps = (state) => {
  return {
    user: state.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
