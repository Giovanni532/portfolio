import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import imageOP from '../../Assets/Certificat/imageOP.png'
import imageWagon from '../../Assets/Certificat/imageWagon.png'

const Certificat = () => {
    const certificatArray = [{
        id: 1,
        title: "OpenClassRoom",
        name: "Concevez votre site web avec PHP et MySQL",
        className: "title-certificat-php",
        img: imageOP,
        skills: "PHP, MySQL et la gestion d'une base de donnée MySQL"
    },
    {
        id: 2,
        title: "OpenClassRoom",
        name: "Apprenez à coder avec JavaScript",
        className: "title-certificat-js",
        img: imageOP,
        skills: "JavaScript, Animations et Dynamisez une page web"
    },
    {
        id: 3,
        title: "OpenClassRoom",
        name: "Développez une application mobile React Native",
        className: "title-certificat-react-native",
        img: imageOP,
        skills: "React-Native, React-Navigations, DATA Binding, API et le développement mobile"
    },
    {
        id: 4,
        title: "Le Wagon Lausanne coding bootcamp",
        name: "Le Wagon Fullstack Challenge",
        className: "title-certificat-wagon",
        img: imageWagon,
        skills: "Ruby, Ruby on Rails, JavaScript ES6, PostgreSQL, CSS3, SASS et l'HTML5"
    },
    {
        id: 5,
        title: "Le Wagon coding bootcamp",
        name: "Le Wagon React/Redux TRACK",
        className: "title-certificat-track",
        img: imageWagon,
        skills: "React, React-Router, Redux et Jest"
    },
    {
        id: 6,
        title: "OpenClassRoom",
        name: "Realisez une application web avec ReactJS",
        className: "title-certificat-react",
        img: imageOP,
        skills: "React, JSX, PropTypes, Jest et Enzyme"
    }
    ]

    const lengthCertificat = certificatArray.length

    return (
        <Container style={{textAlign: 'center'}}>
            <Row>
                <Col className="certificats">
                    {certificatArray.map(certificat =>
                        <div key={certificat.id}>
                            <h2 className={certificat.className + " no-select"}>{certificat.name}</h2>
                            <div className="space-point"></div>
                            <div className="card-certificat">
                                <img src={certificat.img} alt={certificat.name} />
                                <div className="card-certificat-infos">
                                    <h2 style={{ textAlign: 'left' }}>{certificat.title}</h2>
                                    <p style={{ textAlign: 'left' }}>Compétences acquises : {certificat.skills}</p>
                                </div>
                            </div>
                            {lengthCertificat === certificat.id ?
                                <div style={{ height: 50 }}></div>
                                :
                                <div className="space-point"></div>
                            }
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Certificat