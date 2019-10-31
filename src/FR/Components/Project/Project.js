import React from 'react'
import { Carousel } from 'react-bootstrap'
import jeffrey from '../../Assets/Project/jeffrey.png'

export default function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <h3 className="title-jeffrey">Jeffrey APP</h3>
                <img
                    className="d-block w-100 image-project"
                    src={jeffrey}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
