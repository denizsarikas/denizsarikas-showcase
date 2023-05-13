import ProjectsSlider from "./ProjectsSlider"
import ProjectsPagination from "./ProjectsPagination"

import { useTranslation } from 'react-i18next'


const Projects = () => {

    const {t} = useTranslation()
    
    return (
        <div className="container-lg my-5">
            <div className="row align-items-center text-center">
                <h1> {t('titleProjects')}</h1>
                <ProjectsSlider />
                <ProjectsPagination />
            </div>
        </div>
    )
}

export default Projects