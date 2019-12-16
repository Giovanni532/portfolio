import React from 'react'
import Scrollchor from 'react-scrollchor';
import { Container, Row, Col } from 'react-bootstrap'
import profilImg from '../Assets/Maison/profil.jpg'
import Competences from './Competences'
import Projet from './Projet'
import Contact from './Contact'

const Maison = () => {
    return (
        <Container>
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <div className="profil-image">
                        <img src={profilImg} alt="Giovanni Salcuni Profil" className="img" />
                    </div>
                    <div className="profil">
                        <div>
                            <h1>Salcuni Giovanni</h1>
                            <h1 className="title-profil">Développeur web FullStack</h1>
                        </div>
                    </div>
                    <div className="call">
                        <Scrollchor to="#competences"><i className="fas fa-arrow-down"></i></Scrollchor>
                    </div>
                </Col>
            </Row>
            <Competences />
            <Projet />
            <Contact />
        </Container>
    )
}

export default Maison