import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/home/Home';
import Login from './routes/Login/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
