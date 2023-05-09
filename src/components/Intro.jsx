import image from '../assets/images/denizsite2.jpeg'
import SocialMediaIcons from './SocialMediaIcons'

const Intro = () => {
  return (
    <div className="container-lg my-5">

      <div className="row align-items-center text-center">

        <div className="col">
          <div className="bg-primary text-light">
            <h1 className='p-5'>
              Hi, my name is Deniz Sarikas
            </h1>
            <p className='text-start p-3'>
              Thanks for visiting my portfolio. You can check my other projects and github for source codes. Please read other sections to get to know me better. You can directly contact me from below with sending an email.
            </p>
            <div className='row bg-'>

              <div className=''>
                <button type="button" className="btn btn-success w-25" >Left</button>
                <button type="button" className="btn btn-danger w-25" >Middle</button>
              </div>

              <div className='fs-3 bg-dark g-3'>
                <SocialMediaIcons />
              </div>

            </div>
          </div>
        </div>



        <div className="col ">
          <div className=" bg-primary text-light rounded-circle">
            <img src={image} className='rounded-circle' />
          </div>
        </div>



      </div>
    </div>
  )
}

export default Intro