import React from 'react'

const ProjectCard = (props) => {
    const {project} = props
    return (
        <div className='project-card'>
            <h2>{project.name}</h2>
            <ul>
                <li><span><a href={project.github}>Github</a></span></li>
                <li><span><a href={project.website}>Website</a></span></li>
            </ul>
            <p className='project-description'>{project.description}</p>
        </div>
    )
}

export default ProjectCard