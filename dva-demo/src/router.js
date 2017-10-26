import React from 'react';
import { Router, Route } from 'dva/router';
import Todos from './routes/todos';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Todos} />
    </Router>
  );
}

export default RouterConfig;
