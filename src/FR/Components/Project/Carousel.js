import React from 'react'
import ItemsCarousel from 'react-items-carousel'
import useWindowDimensions from './UseWindowDimensions'
import jeffrey from '../../Assets/Project/jeffrey.png'
import otactuWebApp from '../../Assets/Project/otactu-web-app.png'
import easyColoc from '../../Assets/Project/easy-coloc.png'
import otacu from '../../Assets/Project/otacu.png'
import b8OfHope from '../../Assets/Project/b8ofhope.png'
import dreamDrive from '../../Assets/Project/dream-drive.png'
import gic from '../../Assets/Project/gic.png'
import friperie from '../../Assets/Project/ze-friperie.png'

const slideData = [
    {
        id: 1,
        title: "Jeffrey APP",
        classNameTitle: "title-project",
        img: jeffrey
    },
    {
        id: 2,
        title: "Otactu-React",
        classNameTitle: "title-project",
        img: otactuWebApp
    },
    {
        id: 3,
        title: "Easy-coloc",
        classNameTitle: "title-project",
        img: easyColoc
    },
    {
        id: 4,
        title: "Otaku",
        classNameTitle: "title-project",
        img: otacu
    },
    {
        id: 5,
        title: "GIC",
        classNameTitle: "title-project",
        img: gic
    },
    {
        id: 6,
        title: "b8 of hope",
        classNameTitle: "title-project",
        img: b8OfHope
    },
    {
        id: 7,
        title: "Dream Drive",
        classNameTitle: "title-project",
        img: dreamDrive
    },
    {
        id: 8,
        title: "Ze Friperie",
        classNameTitle: "title-project",
        img: friperie
    },
]

const Carousel = () => {
    const [activeItemIndex, setActiveItemIndex] = React.useState(0);
    const chevronWidth = 40;
    const { width } = useWindowDimensions()
    return (
        width < 980 ?
            <div>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={20}
                    leftChevron={<div className="button-project left-project no-select">{'<'}</div>}
                    rightChevron={<div className="button-project right-project no-select">{'>'}</div>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {slideData.map(slide =>
                        <div key={slide.id}>
                            <h3 className={slide.classNameTitle + " no-select"}>{slide.title}</h3>
                            <div class="card-category" style={{ backgroundImage: `url(${slide.img})` }} />
                        </div>
                    )}
                </ItemsCarousel>
            </div>
            :
            <div>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={20}
                    leftChevron={<div className="button-project left-project no-select">{'<'}</div>}
                    rightChevron={<div className="button-project right-project no-select">{'>'}</div>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {slideData.map(slide =>
                        <div key={slide.id}>
                            <h3 className={slide.classNameTitle + " no-select"}>{slide.title}</h3>
                            <div class="card-category" style={{ backgroundImage: `url(${slide.img})` }} />
                        </div>
                    )}
                </ItemsCarousel>
            </div>
    );
};

export default Carousel