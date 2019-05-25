import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './app/Home';
import Login from './user/Login';
import Counter from './counter/counter';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
);

export default Routes;
