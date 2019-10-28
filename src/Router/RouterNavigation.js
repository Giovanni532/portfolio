import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maison from '../FR/Pages/Maison';
import Menu from '../FR/Navbar/Menu';
import Competences from '../FR/Pages/Competences';
import Projet from '../FR/Pages/Projet';
import Contact from '../FR/Pages/Contact';

const RouterNavigations = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Maison />
                </Route>
                <Route exact path="/competences">
                    <Competences/>
                </Route>
                <Route exact path="/projet">
                    <Projet/>
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterNavigations