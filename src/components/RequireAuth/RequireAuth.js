import './RequireAuth.css';
import React from 'react';
import Users from '../Users';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Component = ({ authenticated }) => (
      <div className="RequireAuth" >
            {! authenticated ? (
                  <Redirect to="/login"/>
            ) : (
                  <Switch>
                        <Route path="/users/:userId" component={UserProfile} />
                        <Route path="/users" component={Users} />
                  </Switch>
            )}
      </div>
);

Component.propTypes = { };

export default Component;

