
import exampleImage from '../assets/images/denizsite2.jpeg';
import Carousel from 'react-bootstrap/Carousel';


const DynamicProjectsSlider = ({ projects }) => {
  return (
    <div className='bg-primary' data-aos="zoom-in">
      <Carousel className=''>

      {projects.map(project => (
        <Carousel.Item key={project.id}>
          <img
            className="d-block mx-auto"
            src={exampleImage} alt="First slide"
          />
          <Carousel.Caption>
            <h3>{project.title}</h3>
            <p>{project.about}</p>
          </Carousel.Caption>
        </Carousel.Item>
              ))}
      </Carousel>
    </div>
  )
}

export default DynamicProjectsSlider