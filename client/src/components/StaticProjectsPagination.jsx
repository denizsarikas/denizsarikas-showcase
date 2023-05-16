import ProjectCard from "./ProjectCard"

import { useTranslation } from 'react-i18next'

const ProjectsPagination = () => {

    const {t} = useTranslation()

    return (
        <div className="container">
            <h1>
                {t('titleProjects2')}
            </h1>
            
                <ProjectCard />
        </div>
    )
}

export default ProjectsPagination
