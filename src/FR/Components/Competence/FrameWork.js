import React from 'react'

const FrameWork = () => {
    const frameWork = [
        {
            id: 1,
            name: "React",
            pourcentage: 85,
            icone: "fab fa-react"
        },
        {
            id: 2,
            name: "React-Native",
            pourcentage: 85,
            icone: "fab fa-react"
        },
        {
            id: 3,
            name: "Ruby On Rails",
            pourcentage: 80,
            icone: "fas fa-gem"
        }
    ]

    const nameForDesign = name => {
        if (name.toLowerCase() === "ruby on rails") {
            return "ruby"
        }
        return name.toLowerCase()
    }

    return (
        frameWork.map(frameWork =>
            <div key={frameWork.id} className="card-competences">
                <i className={frameWork.icone + " " + nameForDesign(frameWork.name)} id="framework"></i>
                <h2 className="name-competences">{frameWork.name}</h2>
            </div>
        )
    )
}

export default FrameWork