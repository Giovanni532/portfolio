import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Contact = () => {
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [succes, setSuccess] = React.useState(null)
    const [error, setError] = React.useState('')

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Contact