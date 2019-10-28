import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Home</Link>
            <Link className="navbar-brand" to="/competences">Competence</Link>
            <Link className="navbar-brand" to="/projet">Projet</Link>
            <Link className="navbar-brand" to="/contact">Contact</Link>
        </nav>
    )
}
export default Menu