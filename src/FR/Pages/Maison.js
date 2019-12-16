import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profilImg from '../Assets/Maison/profil.jpg'

const Maison = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="profil">
                        <div className="profil-image">
                            <img src={profilImg} alt="Giovanni Salcuni Profil" className="img" />
                        </div>
                    </div>
                    <div className="profil">
                        <div>
                            <h1>Salut ! je suis Salcuni Giovanni </h1>
                            <h1>Développeur web FullStack</h1>
                        </div>
                        <div>
                            <p>Texte qui viendra ici ....</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Maison