import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './user/Login';
import Counter from './counter/counter';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
);

export default Routes;
