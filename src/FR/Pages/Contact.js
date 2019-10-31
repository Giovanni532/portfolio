import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
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
        <Container>
            {succes === false ?
                <Form onSubmit={e => handleSubmit(e)}>
                    <Row controlId="formBasicEmail">
                        <Col>
                            <Form.Control type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Le sujet" value={subject} onChange={e => setSubject(e.target.value)} />
                        </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Votre message</Form.Label>
                        <Form.Control as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                    <p>{error}</p>
                </Form>
                :
                <p>Ton message a bien ete envoye</p>
            }
        </Container>
    )
}

export default Contact