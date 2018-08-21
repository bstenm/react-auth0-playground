import React from 'react';
import CoreLayout from '../CoreLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
      <BrowserRouter>
            <Switch>
                  <Route path="/authcallback" component={AuthCallback}/>
                  <Route path="/" component={CoreLayout}/>
            </Switch>
      </BrowserRouter>
)

export default App;
