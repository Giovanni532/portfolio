import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from '../Components/Project/Carousel'
import ProjectMobile from '../Components/Project/ProjectMobile'

const Projet = () => {
    const [webSite, setWebSite] = React.useState(true)
    const [mobileApp, setMobileApp] = React.useState(false)

    const handlingWebSite = () => {
        setMobileApp(false)
        setWebSite(true)
    }

    const handlingMobileApp = () => {
        setWebSite(false)
        setMobileApp(true)
    }
    return (
        <Container style={{marginTop: 50, textAlign: 'center'}} id="projet">
            <div className="menu-competences">
                <p onClick={() => handlingWebSite()} className={webSite ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Site web</p>
                <p onClick={() => handlingMobileApp()} className={mobileApp ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Application mobile</p>
            </div>
            {webSite === true ?
                <Container>
                    <Carousel />
                </Container>
                :
                <Container>
                    <ProjectMobile/>
                </Container>
            }
        </Container>
    )
}

export default Projet