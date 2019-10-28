import React from 'react'

const Language = () => {
    const language = [
        {
            id: 1,
            name: "JavaScript",
            pourcentage: 85,
            icone: ""
        },
        {
            id: 2,
            name: "Ruby",
            pourcentage: 80,
            icone: ""
        },
        {
            id: 3,
            name: "HTML",
            pourcentage: 90,
            icone: ""
        },
        {
            id: 4,
            name: "CSS",
            pourcentage: 90,
            icone: ""
        }
    ]

    return (
        <div>
            {language.map(language =>
                <div key={language.id} className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: language.pourcentage + "%" }} aria-valuenow={language.pourcentage} aria-valuemin="0" aria-valuemax="100">{language.name}</div>
                </div>
            )}
        </div>
    )
}

export default Language