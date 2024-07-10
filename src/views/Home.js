import React from 'react';
import profile from'../assets/images/profile.jpg';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai'

const Home = () => {
    let iconStyles = { fontSize: "2em" };
    return (
        <React.Fragment>
            <div className="container-fluid home-content" style={{paddingBottom:'60px'}}>
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 order-last order-lg-first left-to-right">
                        <div className="text-center text-md-center text-lg-start text-white">
                            <p className='home-title animate-charcter'>Hello everyone!</p>
                            <p className='home-subtitle' style={{fontWeight: 'bold'}}>I'm Rolly, BSIT graduate from Polytechnic University of the Philippines.</p>
                            <p className='home-description'>
                                I am an honor graduate with a degree in BSIT from Polytechnic University of the Philippines, driven by a passion for web development using various frameworks in both front-end and back-end. 
                                I am actively seeking challenging opportunities to apply my knowledge and skills in web development within the Information Technology field. 
                                Committed to continuous learning, I am open to expanding my expertise into other IT domains.
                                <br/><br/>
                                With a proven ability to work under pressure and collaborate effectively within project teams, I bring valuable experience in creating successful projects. Additionally, I possess skills in basic troubleshooting of software, hardware, and components.<br/><br/>
                                My commitment to learning is evident in my proactive approach to acquiring new knowledge and skills. I am always ready for new challenges and open to exploring exciting opportunities. <br/><br/>
                            </p>
                            <div className='socials d-flex gap-4 justify-content-center justify-content-md-center justify-content-lg-start'>
                                <a href="https://linkedin.com/in/rolly-delos-reyes-b4a42824b" className='glow-on-hover'><FaLinkedin style={iconStyles}/>&nbsp;Linkedin</a>
                                <a href="https://github.com/DelosReyes-Rolly/" target="_blank" rel="noreferrer" className='glow-on-hover'><FaGithubSquare style={iconStyles}/>&nbsp;Github</a>
                                <a href="https://m.me/delosreyesrolly" target="_blank" rel="noreferrer" className='glow-on-hover'><FaFacebookSquare style={iconStyles}/>&nbsp;Facebook</a>
                                <a href="mailto:rollydelosreyes02@gmail.com" target="_blank" rel="noreferrer" className='glow-on-hover'><AiTwotoneMail style={iconStyles}/>&nbsp;Email</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 d-flex justify-content-center align-items-center order-first order-lg-last right-to-left'>
                        <img src={profile} className='profile' alt='profile'/>
                        <br/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home