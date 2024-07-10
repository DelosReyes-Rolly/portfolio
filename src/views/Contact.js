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
                        <img src={contact} className='contact-image fade-in-text' alt='contact'/>
                        <br/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 order-first order-lg-last">
                        <div className="text-center text-md-center text-lg-start text-white">
                            <p className='postcard__title home-title fade-in-text'>Contact Me</p>
                            <p className='home-subtitle postcard__preview-txt fade-in-text'>Should you have any questions, please don't hesitate to contact me.</p>
                            <p className='home-description postcard__preview-txt fade-in-text'>
                                <a href="tel:09560870191"> <BsFillTelephoneInboundFill/> &nbsp; 09560870191 </a><br/>
                                <a href="https://www.google.com/maps/place/North+Signal+Village,+Taguig,+Metro+Manila/@14.5181077,121.0522971,16z/data=!3m1!4b1!4m6!3m5!1s0x3397c8b56bb4dd9b:0x4fdd8e78b96ac86d!8m2!3d14.5161223!4d121.057159!16s%2Fg%2F125_jv52b?entry=ttu"><BsFillPinMapFill /> &nbsp; North Signal Village, Taguig City</a><br/>
                                <a href="rollydelosreyes02@gmail.com"><MdMail /> &nbsp; rollydelosreyes02@gmail.com </a><br/>
                            </p><br/>
                            <div className='d-flex justify-content-center align-items-center fade-in-text'>
                                <a href="https://drive.google.com/file/d/1mwOx5VT_XGwoTfpEeSWgsZC57zbvrGeb/view?usp=sharing">
                                    <div className="download-button">
                                        <b>Download my resume!</b>
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