import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imageOP from '../../Assets/Certificat/imageOP.png'

const Certificat = () => {
    const certificatArray = [{
        id: 1,
        title: "OpenClassRoom",
        name: "Concevez votre site web avec PHP et MySQL",
        className: "title-certificat-php",
        img: imageOP,
        skills: "PHP, MySQL, gestion d'une base de donnée MySQL"
    },
    {
        id: 2,
        title: "OpenClassRoom",
        name: "Apprenez à coder avec JavaScript",
        className: "title-certificat-js",
        img: imageOP,
        skills: "JavaScript, Animations, Dynamisez une page web"
    }
]

    return (
        <Container>
            <Row>
                <Col className="certificats">
                    {certificatArray.map(certificat =>
                        <div>
                            <h2 className={certificat.className}>{certificat.name}</h2>
                            <div className="space-point"></div>
                            <div class="card-certificat">
                                <img src={certificat.img} alt={certificat.name} />
                                <div class="card-certificat-infos">
                                    <h2 style={{textAlign: 'left'}}>{certificat.title}</h2>
                                    <p style={{textAlign: 'left'}}>Compétences acquises : {certificat.skills}</p>
                                </div>
                            </div>
                            <div className="space-point"></div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Certificat