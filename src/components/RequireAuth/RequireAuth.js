import './RequireAuth.css';
import React from 'react';
import Users from '../Users';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Component = ({ authenticated }) => (
      <div className="RequireAuth" >
            {! authenticated ? (
                  <Redirect to="/"/>
            ) : (
                  <Switch>
                        <Route path="/users" component={Users} />
                  </Switch>
            )}
      </div>
);

Component.propTypes = { };

export default Component;

