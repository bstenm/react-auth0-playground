import './PrimaryLayout.css';
import React from 'react';
import Header from '../Header';
import UsersArea from '../UsersArea';
import Homepage from '../Homepage';
import { Route, Switch } from 'react-router-dom';

const PrimaryLayout = () => (
      <div className="primary-layout">
            <Header />
            <main>
                  <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/users" component={UsersArea} />
                  </Switch>
            </main>
      </div>
);

const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;

