// react tools //
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// project modules //
import Home from '../../Pages/Home'
import Apropos from '../../Pages/Apropos'
import Detail from '../../Pages/Detail'
import Error from '../../Pages/Error'


// project routing //

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/aPropos",
        component: Apropos,
    },
    {
        path: "/detail/:id",
        component: Detail,
    },
    {
        path: "*",
        component: Error,
    }
]

class RouterApp extends React.Component{
    constructor(props){
        super(props)
        this.state ={}
    }

    render() {
        return (
            <Router>
                <Switch>
                    {routes.map((route) => (
                        <Route 
                            exact
                            key={route.path}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Router>
        )
    }
}

export default RouterApp