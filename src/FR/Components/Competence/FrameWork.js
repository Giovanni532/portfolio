import React from 'react'

const FrameWork = () => {
    const frameWork = [
        {
            id: 1,
            name: "React",
            pourcentage: 85,
            icone: ""
        },
        {
            id: 2,
            name: "React-Native",
            pourcentage: 85,
            icone: ""
        },
        {
            id: 3,
            name: "Ruby On Rails",
            pourcentage: 80,
            icone: ""
        }
    ]

    return (
        <div>
            {frameWork.map(frameWork =>
                <div key={frameWork.id} className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: frameWork.pourcentage + "%" }} aria-valuenow={frameWork.pourcentage} aria-valuemin="0" aria-valuemax="100">{frameWork.name}</div>
                </div>
            )}
        </div>
    )
}

export default FrameWork