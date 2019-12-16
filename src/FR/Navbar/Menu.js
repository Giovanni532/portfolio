/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Scrollchor from 'react-scrollchor';

const Menu = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Scrollchor to=""><p className="navbar-brand">Home</p></Scrollchor>
            <Scrollchor to="#competences"><p className="navbar-brand">Competence</p></Scrollchor>
            <Scrollchor to="#projet"><p className="navbar-brand">Projet</p></Scrollchor>
            <Scrollchor to="#contact"><p className="navbar-brand">Contact</p></Scrollchor>
        </nav>
    )
}
export default Menu