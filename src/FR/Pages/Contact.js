import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'
import useWindowDimensions from '../../helper/UseWindowDimensions'

const Contact = () => {
    const [contacted, setContacted] = React.useState(false)
    const { width } = useWindowDimensions();

    return (
        <Container>
            {contacted ? <FormContact /> : null}
            <Row style={{ textAlign: 'center' }}>
                {width <= 750 ?
                    contacted ?
                    <Col>
                        <div onClick={() => setContacted(false)} className="fade-in-bottom close-email">
                            <i id="close" className="fas fa-times"></i>
                            <p>Fermer le formulaire</p>
                        </div>
                    </Col>
                    :
                    null
                    :
                    null
                }
                <Col>
                    <div onClick={() => setContacted(true)} className={contacted ? "contact-email-3" : "contact-email"}>
                        <i id="email" className="fas fa-envelope"></i>
                        <p>Me contacter</p>
                    </div>
                </Col>
                {width >= 750 ?
                    contacted ?
                    <Col>
                        <div onClick={() => setContacted(false)} className="fade-in-bottom close-email">
                            <i id="close" className="fas fa-times"></i>
                            <p>Fermer le formulaire</p>
                        </div>
                    </Col>
                    :
                    null
                    :
                    null
                }
                <Col>
                    <div className={contacted ? "contact-linkedin-3" : "contact-linkedin"}>
                        <i id="linkedin" className="fab fa-linkedin"></i>
                        <p><a id="link-linkedin" href="https://www.linkedin.com/in/giovanni-salcuni/" target="_blank">Mon linkedin</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

const FormContact = () => {
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [succes, setSuccess] = React.useState(false)
    const [error, setError] = React.useState('')

    const valideEmail = email => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (email.length === 0 && subject.length === 0 && message.length === 0) {
            setError("Vous n'avez remplis aucun champs")
        } else if (valideEmail(email) === false) {
            setError("Votre email n'est pas valide")
        } else if (valideEmail(email) === true && subject.length < 10 && message.length < 20) {
            setError("Ils manquent des chaine de caractere")
        }
        else if (valideEmail(email) === true && subject.length > 10 && message.length > 20) {
            setSuccess(true)
        }
    }

    return (
        <div className="fade-in-bottom">
            <Container>
                <h2 className="title-contact">Contact</h2>
                {succes === false ?
                    <Form onSubmit={e => handleSubmit(e)} style={{ textAlign: "center" }} className="contact">
                        <Row style={{ paddingBottom: 20 }}>
                            <Col>
                                <Form.Control type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Le sujet" value={subject} onChange={e => setSubject(e.target.value)} />
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Votre message ..." value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>
                        <button type="submit" className="contact-submit">Envoyer le formulaire</button>
                        <p style={{ paddingTop: 10 }}>{error}</p>
                    </Form>
                    :
                    <div>
                        <p>Ton message a bien ete envoye</p>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Contact