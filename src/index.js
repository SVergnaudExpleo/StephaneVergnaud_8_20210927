// react tools //
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// project modules //
import Home from './Pages/Home'
import Header from './Components/Header'
// project routing //
ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);