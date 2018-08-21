import React from 'react';
import { connect } from 'react-redux';
import Component from './Header';
import AuthContext from '../../utils/AuthContext';

export class Container extends React.Component {

      render() {
            return (
                  <AuthContext.Consumer>
                  { auth0 => (
                        <Component
                              login={() => auth0.authorize()}
                              logout={this.props.logout}
                              { ...this.props }
                        />
                  )}
                  </AuthContext.Consumer>
            );
      }
};

export default connect(
      ({authenticated}) => ({authenticated}),
      ({authenticated: {logout}}) => ({logout})
)( Container );

