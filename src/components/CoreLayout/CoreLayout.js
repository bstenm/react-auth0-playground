import './CoreLayout.css';
import React from 'react';
import About from '../About';
import Loader from '../Loader';
import Header from '../Header';
import PropTypes from 'prop-types';
import Homepage from '../Homepage';
import RequireAuth from '../RequireAuth';
import { Route, Switch, Redirect } from 'react-router-dom';

const CoreLayout = ({ loading }) => (
      <div className="primary-layout">
            <Header />
            { loading && <Loader /> }
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

export default CoreLayout;

