// react tools //
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// project modules //
import Home from './Pages/Home'
import Header from '../src/Container/Header'
import Error from '../src/Pages/Error'
import Apropos from './Pages/Apropos'

// project routing //
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aPropos">
          <Apropos />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);