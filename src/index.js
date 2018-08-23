import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import CoreLayout from './components/CoreLayout';
import { log } from './services/Log';
import { handleAuthentication } from './services/Auth0';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
      <Provider store={ store }>
            <BrowserRouter>
                  <Switch>
                        <Route path="/authcallback" render={() => {
                              const { setSession } = store.dispatch.authenticated;
                              handleAuthentication(setSession, log);
                              return <Redirect to="/"/>;
                        }}/>
                        <Route path="/" component={CoreLayout}/>
                  </Switch>
            </BrowserRouter>
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
