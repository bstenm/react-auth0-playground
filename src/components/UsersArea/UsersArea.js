import './UsersArea.css';
import React from 'react';
import Users from '../Users';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile';
import { Route, Switch } from 'react-router-dom';

export const Component = props => (
      <div className="UsersArea" >
            <Switch>
                  <Route path="/users" exact component={Users} />
                  <Route path="/users/:userId" component={UserProfile} />
            </Switch>
      </div>
);

Component.propTypes = { };

export default Component;

