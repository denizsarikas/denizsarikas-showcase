//

import ContactForm from "../components/ContactForm"
import DownloadCV from "../components/DownloadCV"
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions"
import Intro from "../components/Intro"
import Location from "../components/Location"
import Projects from "../components/Projects"


const HomePage = () => {
  return (
    <div className="container border border-primary">
      <Intro />
      <hr />
      <Location />
      <hr />
      <Projects />
      <hr />
      <DownloadCV />
      <hr />
      <FrequentlyAskedQuestions />
      <hr />
      <ContactForm />
      <hr />

    </div>
  )
}

export default HomePage