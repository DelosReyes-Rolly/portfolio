import React from 'react';
import profile from'../assets/images/profile.jpg';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { AiTwotoneMail } from 'react-icons/ai'

const Home = () => {
    let circleClasses = "inline-block text-white";
    let iconStyles = { fontSize: "2em" };
    return (
        <React.Fragment>
            <div className="container-fluid home-content" style={{paddingBottom:'60px'}}>
                <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-6 order-last order-lg-first left-to-right">
                        <div className="text-center text-md-center text-lg-start text-white">
                            <p className='home-title animate-charcter'>Hello everyone!</p>
                            <p className='home-subtitle' style={{fontWeight: 'bold'}}>I'm Rolly, BSIT from Polytechnic University of the Philippines.</p>
                            <p className='home-description'>
                                I am BSIT graduate from Polytechnic University of the Philippines, I am passionate about web development using different frameworks in front-end and back-end.  
                                I seek challenging opportunities on which I can apply my knowledge in web development in the field of Information Technology. 
                                I am also willing to learn new things,and expand my knowledge further to other fields of IT. 
                                <br/><br/>
                                I can work under pressure, and also a team player as he has experience in creating project together with other people. Experienced in basic troubleshooting of software, hardware and components<br/><br/>
                                Learning new things is one of my priority as it expands my knowledge and skills. I am also constantly seeking new challenges and open for new opportunities. <br/><br/>
                            </p>
                            <div className='socials d-flex gap-4 justify-content-center justify-content-md-center justify-content-lg-start'>
                                <a href="https://linkedin.com/in/rolly-delos-reyes-b4a42824b" className='glow-on-hover'><FaLinkedin style={iconStyles}/>&nbsp;Linkedin</a>
                                <a href="https://github.com/DelosReyes-Rolly/" target="_blank" rel="noreferrer" className='glow-on-hover'><FaGithubSquare style={iconStyles}/>&nbsp;Github</a>
                                <a href="https://m.me/delosreyesrolly" target="_blank" rel="noreferrer" className='glow-on-hover'><FaFacebookSquare style={iconStyles}/>&nbsp;Facebook</a>
                                <a href="mailto:rollydelosreyes729@gmail.com" target="_blank" rel="noreferrer" className='glow-on-hover'><AiTwotoneMail style={iconStyles}/>&nbsp;Email</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6 d-flex justify-content-center align-items-center order-first order-lg-last right-to-left'>
                        <img src={profile} className='profile'/>
                        <br/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home