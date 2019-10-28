import React from 'react'

const Competences = () => {
    const [competence, setCompetence] = React.useState(true)
    const [certificat, setCertificat] = React.useState(false)

    const handlingCompetence = () => {
        setCertificat(false)
        setCompetence(true)
    }

    const handlingCertificat = () => {
        setCompetence(false)
        setCertificat(true)
    }

    return (<div>
        <div><p onClick={() => handlingCompetence()}>Competences</p><p onClick={() => handlingCertificat()}>Certificat</p></div>
        {competence === true ?
            <p>Competences</p>
            :
            certificat === true ?
                <p>Certificat</p>
                :
                <p>Competences</p>
        }
    </div>
    )
}

export default Competences