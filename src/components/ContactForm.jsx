
import { useTranslation } from 'react-i18next'


const ContactForm = () => {

    const {t} = useTranslation()


    return (
        <div className="container">
            <div className=" text-center mt-5 ">
                <h1>{t('titleContact')}</h1>
            </div>
            <div className="row ">
                <div className=" col-md-8 col-12 m-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className=" bg-light">
                            <div className="container">
                                <form id="contact-form" role="form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Firstname *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-person-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="Please enter your firstname" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">E-mail *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-envelope-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input type="email" className="form-control" placeholder="Please enter your e-mail" required="required" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                    <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Firstname *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-envelope-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Firstname *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-envelope-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="form_message">Message *</label>
                                                <textarea id="form_message" name="message" className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                                >
                                            </div>

                                        </div>
                                        <div className="col-4 mx-auto mt-2">
                                            <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Send Message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactForm