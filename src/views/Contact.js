import React from 'react';
import {MdMail} from 'react-icons/md';
import {BsFillPinMapFill, BsFillTelephoneInboundFill} from 'react-icons/bs';
import contact from'../assets/images/contact.png';


const Contact = () => {
    return (
        <React.Fragment>
            <div className="container py-4">
                <div className="row align-items-center postcard dark red top-to-bottom">
                    <div className='col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center order-last order-lg-first'>
                        <img src={contact} className='contact-image fade-in-text'/>
                        <br/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 order-first order-lg-last">
                        <div className="text-center text-md-center text-lg-start text-white">
                            <p className='postcard__title home-title fade-in-text'>Contact Me</p>
                            <p className='home-subtitle postcard__preview-txt fade-in-text'>Should you have any questions, please don't hesitate to contact me.</p>
                            <p className='home-description postcard__preview-txt fade-in-text'>
                                <BsFillTelephoneInboundFill/> 09560870191 <br/>
                                <BsFillPinMapFill /> North Signal Village, Taguig City<br/>
                                <MdMail /> rollydelosreyes729@gmail.com <br/>
                            </p><br/>
                            <div className='d-flex justify-content-center align-items-center fade-in-text'>
                                <a href="https://drive.google.com/file/d/1pPV4pNhWdUPiODfddMEGPPpDtaG6WRH0/view?usp=sharing">
                                    <div className="download-button">
                                        Download my resume!
                                        <span>
                                            <span></span>
                                        </span>
                                    </div>
                                </a>
                            </div><br/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Contact