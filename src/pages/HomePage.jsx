import DownloadCV from "../components/DownloadCV"
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions"
import Intro from "../components/Intro"
import Projects from "../components/Projects"
import ProjectsPagination from "../components/ProjectsPagination"


const HomePage = () => {
  return (
    <div className="container border border-primary">
      <Intro />
      <hr />
      <Projects />
      <hr />
      <DownloadCV />
      <hr />
      <FrequentlyAskedQuestions />
      <hr />
      <ProjectsPagination />
      <hr />
    </div>
  )
}

export default HomePage