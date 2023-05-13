import image from '../assets/images/denizsite2.jpeg'
import SocialMediaIcons from './SocialMediaIcons'

import { useTranslation } from 'react-i18next'


const Intro = () => {

  const {t} = useTranslation()



  return (
    <div className="container-lg my-5">
      <div className="row align-items-center text-center">
        <div className="col">
          <div className=" text-dark">
            <h1 className="p-5">
              {t('titleIntro')}
            </h1>
            <p className="text-start p-3">
            {t('intro')}
            </p>
            <div className="row bg-primary">
              <div className='col'>
                <button type="button" className="btn btn-success w-50">
                {t('startbutton1')}
                </button>
              </div>
              <div className='col'>
                <button type="button" className="btn btn-success w-50">
                {t('startbutton2')}
                </button>
              </div>


              <div className='bg-secondary'>
                <h3>{t('welcome')}</h3>
              </div>



            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className=" text-light rounded-circle text-center">
            <img src={image} className="rounded-circle img-fluid" style={{ maxWidth: '90%', height: 'auto' }} />
            <div className='fs-4'>
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Intro