import './PrimaryLayout.css';
import React from 'react';
import Header from '../Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from '../Homepage';

const PrimaryLayout = () => (
      <div className="primary-layout">
            <Header />
            <main>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/users" component={UsersPage} />
            </main>
      </div>
);

const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;

