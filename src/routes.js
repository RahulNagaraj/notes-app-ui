import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './user/Login';
import Counter from './counter/counter';
import NotFound from './error/NotFound';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={Counter} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
