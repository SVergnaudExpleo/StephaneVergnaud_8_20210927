// react tools //
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// project modules //
import Home from './Pages/Home'
import Header from '../src/Components/Header'
// project routing //
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);