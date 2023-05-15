import { useTranslation } from 'react-i18next'

const Header = () => {



  const { i18n } = useTranslation()
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang)

  }


  return (

    <nav className="navbar navbar-expand-md navbar-light pt-3 pb-4 bg-warning sticky-top">
      <div className="container-xxl ">


        <a className="navbar-brand text-white" href="#intro">
          <span className="">
            <i className="bi bi-book-half"></i>
            DENIZSARIKASWEBSITE
          </span>
        </a>



        <button className="navbar-toggler text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
          <li className="nav-item">
            <a className="nav-link" href="#cv">CV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Get in Touch</a>
          </li>
          <li className="nav-item d-md-none">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" onClick={() => clickHandle('tr')} className="btn btn-primary">tr</button>
              <button type="button" onClick={() => clickHandle('en')} className="btn btn-primary">en</button>
            </div>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" onClick={() => clickHandle('tr')} className="btn btn-primary">tr</button>
              <button type="button" onClick={() => clickHandle('en')} className="btn btn-primary">en</button>
            </div>
          </li>

        </ul>
      </div>




    </div>





    </nav >
  )
}

export default Header