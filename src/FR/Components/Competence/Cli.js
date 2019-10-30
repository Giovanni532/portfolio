import React from 'react'

const Cli = () => {
    const cli = [
        {
            id: 1,
            name: "Git",
            pourcentage: 85,
            icone: "fab fa-git-alt"
        },
        {
            id: 2,
            name: "Heroku CLI",
            pourcentage: 85,
        },
        {
            id: 3,
            name: "Bash",
            pourcentage: 85,
        }
    ]

    const nameToDesign = name => {
        if(name.toLowerCase() === 'heroku cli') {
            return 'heroku'
        } else if (name.toLowerCase() === 'bash') {
            return 'fas fa-terminal'
        }
        return name.toLowerCase()
    }

    return (
        cli.map(cli =>
            <div key={cli.id} className="card-competences">
                <i className={nameToDesign(cli.name)} id="cli"></i>
                <h2 className="name-competences">{cli.name}</h2>
            </div>
        )
    )
}

export default Cli