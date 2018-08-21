import './PrimaryLayout.css';
import React from 'react';
import About from '../About';
import Header from '../Header';
import PropTypes from 'prop-types';
import Homepage from '../Homepage';
import RequireAuth from '../RequireAuth';
import { Route, Switch, Redirect } from 'react-router-dom';

const PrimaryLayout = () => (
      <div className="primary-layout">
            <Header />
            <main>
                  <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={RequireAuth} />
                        <Redirect to="/" />
                  </Switch>
            </main>
      </div>
);

const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;

