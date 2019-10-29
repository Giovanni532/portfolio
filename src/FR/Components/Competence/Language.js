import React from 'react'

const Language = () => {
    const language = [
        {
            id: 1,
            name: "JavaScript",
            pourcentage: 85,
            icone: "fab fa-js-square"
        },
        {
            id: 2,
            name: "Ruby",
            pourcentage: 80,
            icone: "fas fa-gem"
        },
        {
            id: 3,
            name: "HTML",
            pourcentage: 90,
            icone: "fab fa-html5"
        },
        {
            id: 4,
            name: "CSS",
            pourcentage: 90,
            icone: "fab fa-css3-alt"
        },
        {
            id: 5,
            name: "SCSS",
            pourcentage: 90,
            icone: "fab fa-sass"
        }
    ]

    const iconeToDesgin = (icone, name) => {
        if (name.toLowerCase() === "javascript"){
            return "javascript"
        }
        return icone + " " + name.toLowerCase()
    }

    return (
        language.map(language =>
            <div key={language.id} className="card-competences">
                <i className={iconeToDesgin(language.icone, language.name)} id="language"></i>
                <h2 className="name-competences">{language.name}</h2>
            </div>
        )
    )
}

export default Language