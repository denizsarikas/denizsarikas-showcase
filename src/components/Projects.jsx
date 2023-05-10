import ProjectsSlider from "./ProjectsSlider"
import ProjectsPagination from "./ProjectsPagination"


const Projects = () => {
    return (
        <div className="container-lg my-5">
            <div className="row align-items-center text-center">
                <h1>My projects</h1>
                <ProjectsSlider />
                <ProjectsPagination />
            </div>
        </div>
    )
}

export default Projects