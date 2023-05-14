import DynamicProjectCard from "./DynamicProjectCard"
import StaticProjectsSlider from "./StaticProjectsSlider"

import { useTranslation } from 'react-i18next'

import useAxios from '../hooks/useAxios';



const Projects = () => {

    const { error, isPending, data: projects } = useAxios('http://localhost:3000/projects')
    const { t } = useTranslation()

    return (
        <div className="container-lg my-5">
            <div className="row align-items-center text-center">
                <h1> {t('titleProjects')}</h1>
                <StaticProjectsSlider />
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {projects && <DynamicProjectCard projects={projects} />}
            </div>
        </div>
    )
}

export default Projects