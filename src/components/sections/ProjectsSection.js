import React from 'react'
import './ProjectsSection.css'
import ProjectsList from './ProjectsList'
function ProjectsSection() {
    return (
        <div className="projects__section">
            <h1 className="title">All Projects</h1>
            <ProjectsList />
        </div>

    )
}

export default ProjectsSection
