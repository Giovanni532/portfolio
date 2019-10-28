import React from 'react'
import Data from '../Components/Competence/Data'
import FrameWork from '../Components/Competence/FrameWork'
import Language from '../Components/Competence/Language'

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
        <div>
            <p onClick={() => handlingCompetence()}>Competences</p>
            <p onClick={() => handlingCertificat()}>Certificat</p>
        </div>
        {competence === true ?
            <div>
                <Data />
                <FrameWork/>
                <Language/>
            </div>
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