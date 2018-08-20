import './PrimaryLayout.css';
import React from 'react';
import Users from '../Users';
import About from '../About';
import Header from '../Header';
import PropTypes from 'prop-types';
import Homepage from '../Homepage';
import UserProfile from '../UserProfile';
import { Route, Switch, Redirect } from 'react-router-dom';

const PrimaryLayout = () => (
      <div className="primary-layout">
            <Header />
            <main>
                  <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/about" component={About} />
                        <Route path="/users/:userId" component={UserProfile} />
                        <Route path="/users" component={Users} />
                        <Redirect to="/" />
                  </Switch>
            </main>
      </div>
);

const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;

