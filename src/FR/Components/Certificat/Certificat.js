import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imageOP from '../../Assets/Certificat/imageOP.png'

const Certificat = () => {
    const certificatArray = [{
        id: 1,
        name: "Concevez votre site web avec PHP et MySQL",
        className: "title-certificat-php",
        img: imageOP,
        skills: "Compétences acquises : PHP, MySQL, gestion d'une base de donnée MySQL"
    }]

    return (
        <Container>
            <Row>
                <Col className="certificats">
                    {certificatArray.map(certificat => 
                    <div key={certificat.id}>
                        <h2 className={certificat.className}>{certificat.name}</h2>
                        <div>
                           <img src={certificat.img} alt={certificat.name}/> 
                        </div>
                    </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Certificat