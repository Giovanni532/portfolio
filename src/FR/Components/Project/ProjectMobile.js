import React from 'react'
import { Row, Col } from 'react-bootstrap'
import jeffreyMobile from '../../Assets/ProjectMobile/jeffrey-mobile.PNG'

const ProjectMobile = () => {
    const slideData = [
        {
            id: 1,
            title: "Jeffrey",
            classNameTitle: "title-project",
            img: jeffreyMobile
        },
        {
            id: 2,
            title: "IOAlphaTrading",
            classNameTitle: "title-project",
            img: jeffreyMobile
        },
    ]

    return (
        <Row>
            {slideData.map(slide =>
                <Col key={slide.id} sm={12} md={6} lg={6}>
                    <div>
                        <h3 className={slide.classNameTitle + " no-select"}>{slide.title}</h3>
                        <div className="card-mobile" style={{ backgroundImage: `url(${slide.img})` }} />
                    </div>
                </Col>
            )}
        </Row>
    )
}

export default ProjectMobile