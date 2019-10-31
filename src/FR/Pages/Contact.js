import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
    const [email, setEmail] = React.useState('')
    const [emailValid, setEmailValid] = React.useState(false)
    const [subject, setSubject] = React.useState('')
    const [subjectValid, setSubjectValid] = React.useState(false)
    const [message, setMessage] = React.useState('')
    const [messageValid, setMessageValid] = React.useState(false)
    const [succes, setSuccess] = React.useState(null)
    const [error, setError] = React.useState('')

    const validateEmail = mail => {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexp.test(mail)) {
            return setEmailValid(true)
        }
        return setEmailValid(false)
    }

    const validateSubject = subject => {
        if (subject.length < 10) {
            return setSubjectValid(true)
        }
        return setSubjectValid(false)
    }


    const validateMessage = message => {
        if (message.length < 20) {
            return setMessageValid(true)
        }
        return setMessageValid(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        validateEmail(email)
        validateMessage(message)
        validateSubject(subject)

        if (emailValid === false && subjectValid === false && messageValid === false) {
            setError("Vous n'avez remplis aucun champs")
        }
    }

    return (
        <Container>
            <Form onSubmit={e => handleSubmit(e)}>
                <Row controlId="formBasicEmail">
                    <Col>
                        <Form.Control type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
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
        </Container>
    )
}

export default Contact