
import { useRef } from 'react';
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';




const ContactForm = () => {

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
    //console.log(import.meta.env.VITE_SERVICE_ID)
    const form = useRef();
    
    const { t } = useTranslation()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id="contact" className="container">
            <div className=" text-center mt-5 ">
                <h1>{t('titleContact')}</h1>
            </div>
            <div className="row ">
                <div className=" col-md-8 col-12 m-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className=" bg-light">
                            <div className="container">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Firstname *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-person-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input type="text" className="form-control" placeholder="Please enter your firstname" required="required" name="user_name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>E-mail *</label>
                                                <div className="row">
                                                    <div className="col-1">
                                                        <i className="bi bi-envelope-fill fs-3"></i>
                                                    </div>
                                                    <div className="col">
                                                        <input type="email" className="form-control" placeholder="Please enter your e-mail" required="required" name="user_email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Message *</label>
                                                <textarea className="form-control" placeholder="Write your message here." required="required" name="user_message" />
                                            </div>
                                        </div>
                                        <div className="col-2 mx-auto mt-2">
                                            <input type="submit" value="Send" className="btn btn-success btn-send  pt-2 btn-block" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm