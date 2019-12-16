import React from 'react'
import Data from '../Components/Competence/Data'
import FrameWork from '../Components/Competence/FrameWork'
import Language from '../Components/Competence/Language'
import Cli from '../Components/Competence/Cli'
import { Container, Row, Col } from 'react-bootstrap'
import Certificat from '../Components/Certificat/Certificat'

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
        <div style={{marginTop: 50}} id="competences">
            <div className="menu-competences">
                <p onClick={() => handlingCompetence()} className={competence ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Competences</p>
                <p onClick={() => handlingCertificat()} className={certificat ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Certificat</p>
            </div>
            {competence === true || certificat === false ?
                <Container>
                    <Row>
                        <Col>
                            <h2 className="title-competence-data no-select">Data</h2>
                            <Data />
                        </Col>
                        <Col>
                            <h2 className="title-competence-framework no-select">Framework</h2>
                            <FrameWork />
                        </Col>
                        <Col>
                            <h2 className="title-competence-language no-select">Language</h2>
                            <Language />
                        </Col>
                        <Col>
                            <h2 className="title-competence-cli no-select">Cli</h2>
                            <Cli />
                        </Col>
                    </Row>
                </Container>
                :
                <Certificat />
            }
        </div>
    )
}

export default Competences