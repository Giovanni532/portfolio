import React from 'react'
import Scrollchor from 'react-scrollchor';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
            <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarsExample11">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Scrollchor to="#competences" className="nav-link">Mes compétences </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#projet" className="nav-link">Mes projets </Scrollchor>
                        </li>
                        <li className="nav-item">
                            <Scrollchor to="#contact" className="nav-link">Contact</Scrollchor>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu