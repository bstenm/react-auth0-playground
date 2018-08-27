import React from 'react';
import { log } from '../../services/Log';
import { connect } from 'react-redux';
import Component from './App';
import { handleAuthentication } from '../../services/Auth0';

export class Container extends React.Component {

      componentWillMount () {
            // is user's access token still valid?
            this.props.isAuthenticated();
      }

      handleAuthentication = () => {
            handleAuthentication(this.props.setSession, log);
      }

      render() {
            return (
                  <Component
                        handleAuthentication={ this.handleAuthentication }
                  />
            );
      }
};

export default connect(
      ({authenticated}) => ({authenticated}),
      ({authenticated: {setSession, isAuthenticated}}) => ({setSession, isAuthenticated})
)(Container);
