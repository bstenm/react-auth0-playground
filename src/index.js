import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import auth0Js from 'auth0-js';
import { auth0Config } from './config';
import CoreLayout from './components/CoreLayout';
import AuthContext from './utils/AuthContext';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const auth0 = new auth0Js.WebAuth(auth0Config);

const handleAuthentication = () => {
      auth0.parseHash((err, authResult) => {
            const {accessToken, idToken} = authResult || {};
            if (accessToken && idToken) {
                  store.dispatch.authenticated.setSession(authResult);
            } else if (err) {
                  console.error(err);
            }
      });
};

ReactDOM.render(
      <Provider store={ store }>
            <AuthContext.Provider value={auth0}>
                  <BrowserRouter>
                        <Switch>
                              <Route path="/authcallback" render={() => {
                                    handleAuthentication();
                                    return <Redirect to="/"/>;
                              }}/>
                              <Route path="/" component={CoreLayout}/>
                        </Switch>
                  </BrowserRouter>
            </AuthContext.Provider>
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
