// import { Link } from 'react-router-dom';
import image from '../assets/images/denizsite2.jpeg'


const DynamicProjectCard = ({ projects }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {projects.map(project => (
        <div className="col" key={project.id} data-aos="fade-up">
          <div className="card h-100">
            <img src={image} className="card-img-top rounded-circle" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.about}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">{project.techs}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicProjectCard

