// react tools //
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// project modules //
import Home from './Pages/Home'
import Apropos from './Pages/Apropos'
import Error from '../src/Pages/Error';
import Detail from './Pages/Detail'

// project routing //
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aPropos">
          <Apropos />
        </Route>
        <Route 
          exact path='/detail/:id'
        >
          <Detail />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);