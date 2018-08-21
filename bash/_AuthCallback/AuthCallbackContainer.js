import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../utils/AuthContext';

class Container extends React.Component {

      componentWillMount () {
            this.props.auth0.parseHash((err, authResult) => {
                  const {accessToken, idToken} = authResult || {};
                  if (accessToken && idToken) {
                        this.props.setSession(authResult);
                  } else if (err) {
                        console.error(err);
                  }
            });
      }

      render() {
            return  <Redirect to="/"/>;
      }
};

const Wrapper = (props) => (
      <AuthContext.Consumer>
            { auth0 => <Container auth0={auth0} {...props} /> }
      </AuthContext.Consumer>
);

export default connect(
      null,
      ({authenticated: {setSession}}) => ({setSession}))
( Wrapper );

