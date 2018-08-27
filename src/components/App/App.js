import React from 'react';
import { log } from '../../services/Log';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CoreLayout from '../CoreLayout';
import { handleAuthentication } from '../../services/Auth0';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export const Component = ({ setSession }) => (
      <BrowserRouter>
            <Switch>
                  <Route path="/authcallback" render={() => {
                        handleAuthentication(setSession, log);
                        return <Redirect to="/"/>;
                  }}/>
                  <Route path="/" component={CoreLayout}/>
            </Switch>
      </BrowserRouter>
);

Component.propTypes = {
      setSession: PropTypes.func.isRequired
};

export default connect(
      ({ authenticated }) => ({ authenticated }),
      ({ authenticated: { setSession }}) => ({ setSession })
)(Component);

