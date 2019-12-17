import React from 'react'
import { Container, Form, Row, Col } from 'react-bootstrap'

const Contact = () => {
    const [contacted, setContacted] = React.useState(true)

    return (
        <Container id="contact">
            {contacted ? <FormContact /> : null}
            <Row style={{ textAlign: 'center' }}>
                <Col>
                {contacted ?
                    <div onClick={() => setContacted(false)} className="fade-in-bottom close-email">
                            <i id="close" className="fas fa-times"></i>
                            <p>Fermer le formulaire</p>
                        </div>
                        :
                        <div onClick={() => setContacted(true)} className="contact-email">
                        <i id="email" className="fas fa-envelope"></i>
                        <p>Me contacter</p>
                    </div> 
                }
                </Col>
                <Col>
                    <div className="contact-github">
                        <i id="github" className="fab fa-github"></i>
                        <p><a id="link-github" href="https://github.com/Giovanni532" target="_blank" rel="noopener noreferrer">Mon Github</a></p>
                    </div>
                </Col>
                <Col>
                    <div className="contact-linkedin">
                        <i id="linkedin" className="fab fa-linkedin"></i>
                        <p><a id="link-linkedin" href="https://www.linkedin.com/in/giovanni-salcuni/" target="_blank" rel="noopener noreferrer">Mon Linkedin</a></p>
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
        <Container className="fade-in-bottom">
            <Container style={{textAlign: 'center'}}>
                <h2 className="title-contact">Contact</h2>
                {succes === false ?
                    <Form onSubmit={e => handleSubmit(e)} style={{ textAlign: "center" }} className="contact">
                        <Form.Row style={{ paddingBottom: 20 }}>
                            <Col>
                                <Form.Control type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="Le sujet" value={subject} onChange={e => setSubject(e.target.value)} />
                            </Col>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3" placeholder="Votre message ..." value={message} onChange={e => setMessage(e.target.value)} />
                        </Form.Group>
                        <button type="submit" className="contact-submit">Envoyer le formulaire</button>
                        <p style={{ paddingTop: 10 }}>{error}</p>
                    </Form>
                    :
                    <div className="fade-in-bottom">
                        <p>Ton message a bien ete envoye</p>
                    </div>
                }
            </Container>
        </Container>
    )
}

export default Contact