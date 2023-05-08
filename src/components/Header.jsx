const Header = () => {
  return (

    <nav className="navbar navbar-expand-md navbar-light pt-3 pb-4 bg-warning">

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
              <a className="nav-link" href="#topics">About The Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Get in Touch</a>
            </li>
            <li className="nav-item d-md-none">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn btn-secondary" href="#pricing">buy now</a>
            </li>

          </ul>
        </div>




      </div>





    </nav>
  )
}

export default Header