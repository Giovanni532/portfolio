import React from 'react'
import { Container } from 'react-bootstrap'

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
                <form onSubmit={e => handleSubmit(e)} className="contact">
                    <div>
                            <input type="email" placeholder="Votre email" value={email} onChange={e => setEmail(e.target.value)} />
                            <input type="text" placeholder="Le sujet" value={subject} onChange={e => setSubject(e.target.value)} />
                    </div>
                    <div>
                        <textarea as="textarea" rows="3" value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                    <button type="submit" className="contact-submit">Submit form</button>
                    <p>{error}</p>
                </form>
                :
                <p>Ton message a bien ete envoye</p>
            }
        </Container>
    )
}

export default Contact