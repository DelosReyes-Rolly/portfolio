import React from 'react';
import awb from'../assets/images/awb.jpg';
import concentrix from'../assets/images/concentrix.jpg';

const Experience = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container py-4">
          <article className="postcard dark red right-to-left">
            <a className="postcard__img_link" href="https://www.achievewithoutborders.com/">
              <img className="postcard__img" src={awb} alt="Image Title" />	
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red fade-in-text"><a href="https://www.achievewithoutborders.com/">Quality Assurance Engineer Intern</a></h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Achieve Without Borders, Inc.</div>
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt fade-in-text">
                Develop and execute manual and automated test cases to identify defects in software products.
                Collaborate with other members of the quality assurance team to continuously improve testing methodologies and techniques.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item fade-in-text"><i className="fas fa-tag mr-2"></i>April -July 2023</li>
              </ul>
            </div>
          </article>
          <article className="postcard dark green left-to-right">
            <a className="postcard__img_link" href="https://www.concentrix.com/">
              <img className="postcard__img" src={concentrix} alt="Image Title" />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title green fade-in-text"><a href="https://www.concentrix.com/">Human Resource Specialist Intern</a></h1>
              <div className="postcard__subtitle small">
                <time datetime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i><div className='fade-in-text'>Concentrix</div>
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt fade-in-text">
                Receiving, verifying, and filing needed requirement of the employees. Assisting applicants 
                through different steps of employment and encoding their personal information through the system.
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2 fade-in-text"></i>April -May 2018</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Experience