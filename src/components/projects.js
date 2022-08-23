import React from 'react';

import ProjectCard from './projectcard'
import projects from '../data/Projects'

const Projects = () => {
    return (
        <div className='container'>
            {projects.map((project, key)=> {
                return <ProjectCard project={project} key={key}/>
            })}
        </div>
    )
}

export default Projects