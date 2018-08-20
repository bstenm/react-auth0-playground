import './PrimaryLayout.css';
import React from 'react';
import Header from '../Header';
import { BrowserRouter, Route } from 'react-router-dom';

const PrimaryLayout = () => (
      <div className="primary-layout">
            <Header />
            <main>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/users" component={UsersPage} />
            </main>
      </div>
);

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

export default PrimaryLayout;

