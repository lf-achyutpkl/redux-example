import React from 'react';
import reducers from './reducers';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

let routes = (
  <Router history = {browserHistory} >
      <IndexRoute component={App}/>
      <Route path='/' component={App}></Route>
      <Route path='/dashboard' component={Dashboard}> </Route>
      <Route path='/form' component={Form}> </Route>
  </Router>
);

export default routes;
