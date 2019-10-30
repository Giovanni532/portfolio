import React from 'react'
import Data from '../Components/Competence/Data'
import FrameWork from '../Components/Competence/FrameWork'
import Language from '../Components/Competence/Language'
import Cli from '../Components/Competence/Cli'

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

    return (
        <div>
            <div className="menu-competences">
                <p onClick={() => handlingCompetence()} className={competence ? "link-menu-competences active" : "link-menu-competences"}>Competences</p>
                <p onClick={() => handlingCertificat()} className={certificat ? "link-menu-competences active" : "link-menu-competences"}>Certificat</p>
            </div>
            {competence === true || certificat === false ?
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="title-competence-data">Data</h2>
                            <Data />
                        </div>
                        <div className="col">
                            <h2 className="title-competence-framework">Framework</h2>
                            <FrameWork />
                        </div>
                        <div className="col">
                            <h2 className="title-competence-language">Language</h2>
                            <Language />
                        </div>
                        <div className="col">
                            <h2 className="title-competence-language">Cli</h2>
                            <Cli />
                        </div>
                    </div>
                </div>
                :
                <p>Certificat</p>
            }
        </div>
    )
}

export default Competences