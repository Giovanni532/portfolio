import React from 'react'

const Data = () => {
    const data = [
        {
            id: 1,
            name: "PostgreSQL",
            pourcentage: 75,
            icone: "fas fa-database"
        },
        {
            id: 2,
            name: "MySQL",
            pourcentage: 75,
            icone: "fas fa-database"
        },
        {
            id: 3,
            name: "SQL",
            pourcentage: 80,
            icone: "fas fa-database"
        },
        {
            id: 4,
            name: "Firebase",
            pourcentage: 75,
            icone: "fas fa-database"
        }
    ]

    const iconeToDesgin = (name) => {
        if (name.toLowerCase() === 'sql') {
            return 'fas fa-database'
        }
        return name.toLowerCase()
    }

    return (
        data.map(data =>
            <div key={data.id} className="card-competences">
                <i className={iconeToDesgin(data.name)} id="data"></i>
                <h2 className="name-competences">{data.name}</h2>
            </div>
        )
    )
}

export default Data