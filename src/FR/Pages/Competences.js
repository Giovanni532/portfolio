import React from 'react'
import Data from '../Components/Competence/Data'
import FrameWork from '../Components/Competence/FrameWork'
import Language from '../Components/Competence/Language'
import Cli from '../Components/Competence/Cli'
import { Container, Row, Col } from 'react-bootstrap'

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
                <Container>
                    <Row>
                        <Col>
                            <h2 className="title-competence-data">Data</h2>
                            <Data />
                        </Col>
                        <Col>
                            <h2 className="title-competence-framework">Framework</h2>
                            <FrameWork />
                        </Col>
                        <Col>
                            <h2 className="title-competence-language">Language</h2>
                            <Language />
                        </Col>
                        <Col>
                            <h2 className="title-competence-cli">Cli</h2>
                            <Cli />
                        </Col>
                    </Row>
                </Container>
                :
                <p>Certificat</p>
            }
        </div>
    )
}

export default Competences