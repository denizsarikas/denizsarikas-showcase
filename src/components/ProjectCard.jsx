import image from '../assets/images/denizsite2.jpeg'

const ProjectCard = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">



            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 1</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <img src={image} className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 2</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className=" rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 3</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <div className='row mx-auto'>
                            <div className='col'><small className="text-muted">Last updated 3 mins ago</small></div>
                            <div className='col'><button>link</button></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className=" rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 4</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className=" rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 5</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Project 6</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>






        </div>

    )
}

export default ProjectCard