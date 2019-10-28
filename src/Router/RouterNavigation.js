import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maison from '../FR/Pages/Maison';
import Menu from '../FR/Navbar/Menu';

const RouterNavigations = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Maison />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterNavigations