// react tools //
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// project modules //
import Home from './Pages/Home'
// project routing //
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);