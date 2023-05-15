import DynamicProjectCard from "./DynamicProjectCard"
import DynamicProjectsSlider from "./DynamicProjectsSlider";

import { useTranslation } from 'react-i18next'

import useAxios from '../hooks/useAxios';



const Projects = () => {

    const { error, isPending, data: projects } = useAxios('http://localhost:3000/projects')
    const { t } = useTranslation()

    return (
        <section id="projects" className="container-lg my-5">
            <div className="row align-items-center text-center">
                <h1> {t('titleProjects')}</h1>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {projects && <DynamicProjectsSlider projects={projects} />}
                {projects && <DynamicProjectCard projects={projects} />}
            </div>
        </section>
    )
}

export default Projects