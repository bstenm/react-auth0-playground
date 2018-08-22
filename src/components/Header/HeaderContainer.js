import React from 'react';
import { connect } from 'react-redux';
import Component from './Header';

export default connect(
      ({authenticated}) => ({authenticated}),
      ({authenticated: {logout}}) => ({logout})
)(Component);

