import React from 'react'

const Data = () => {
    const data = [
        {
            id: 1,
            name: "PostgreSQL",
            pourcentage: 75,
            icone: ""
        },
        {
            id: 2,
            name: "MySQL",
            pourcentage: 75,
            icone: ""
        },
        {
            id: 3,
            name: "SQL",
            pourcentage: 80,
            icone: ""
        },
        {
            id: 4,
            name: "Firebase",
            pourcentage: 75,
            icone: ""
        }
    ]

    return (
        <div>
            {data.map(data =>
                <div key={data.id} className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: data.pourcentage + "%" }} aria-valuenow={data.pourcentage} aria-valuemin="0" aria-valuemax="100">{data.name}</div>
                </div>
            )}
        </div>
    )
}

export default Data