import React from 'react';
import PropTypes from 'prop-types';
import CoreLayout from '../CoreLayout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export const Component = ({store, handleAuthentication}) => (
      <BrowserRouter>
            <Switch>
                  <Route path="/authcallback" render={() => {
                        handleAuthentication();
                        return <Redirect to="/"/>;
                  }}/>
                  <Route path="/" component={CoreLayout}/>
            </Switch>
      </BrowserRouter>
);

Component.propTypes = { };

export default Component;

