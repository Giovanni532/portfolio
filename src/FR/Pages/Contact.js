import React from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [succes, setSuccess] = React.useState(null)
    const [error, setError] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
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