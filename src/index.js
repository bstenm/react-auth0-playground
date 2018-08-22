import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { auth0 } from './services/Auth0';
import CoreLayout from './components/CoreLayout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
            <BrowserRouter>
                  <Switch>
                        <Route path="/authcallback" render={() => {
                              handleAuthentication();
                              return <Redirect to="/"/>;
                        }}/>
                        <Route path="/" component={CoreLayout}/>
                  </Switch>
            </BrowserRouter>
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
