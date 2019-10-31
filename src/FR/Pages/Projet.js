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
        <div>
            <div className="menu-competences">
                <p onClick={() => handlingWebSite()} className={webSite ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Web</p>
                <p onClick={() => handlingMobileApp()} className={mobileApp ? "link-menu-competences active-link no-select" : "link-menu-competences no-select"}>Mobile</p>
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
        </div>
    )
}

export default Projet