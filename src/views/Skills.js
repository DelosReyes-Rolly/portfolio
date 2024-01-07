import React from 'react'
import { TbBrandLaravel, TbBrandPhp, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact, TbBrandMysql, TbBrandCpp, TbBrandCypress } from 'react-icons/tb';
import { LiaJava } from 'react-icons/lia';
import { FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-1 left-to-right">
              <div className="txt">
                <h1 className='fade-in-text'>LARAVEL</h1>
                <p>Intermediate</p>
              </div>
              <div className="ico-card">
                <i><TbBrandLaravel /></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2 top-to-bottom">
              <div className="txt">
                <h1 className='fade-in-text'>PHP</h1>
                <p>Intermediate</p>
              </div>
              <div className="ico-card">
                <i><TbBrandPhp/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3 right-to-left">
              <div className="txt">
                <h1 className='fade-in-text'>HTML</h1>
                <p>Advanced</p>
              </div>
              <div className="ico-card">
                <i><TbBrandHtml5/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-1 left-to-right">
              <div className="txt">
                <h1 className='fade-in-text'>CSS</h1>
                <p>Advanced</p>
              </div>
              <div className="ico-card">
                <i><TbBrandCss3/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2 top-to-bottom">
              <div className="txt">
                <h1 className='fade-in-text'>JAVASCRIPT</h1>
                <p>Beginner</p>
              </div>
              <div className="ico-card">
                <i><TbBrandJavascript/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3 right-to-left">
              <div className="txt">
                <h1 className='fade-in-text'>REACT</h1>
                <p>Beginner</p>
              </div>
              <div className="ico-card">
                <i><TbBrandReact/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-1 left-to-right">
              <div className="txt">
                <h1 className='fade-in-text'>MySQL</h1>
                <p>Intermediate</p>
              </div>
              <div className="ico-card">
                <i><TbBrandMysql/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2 top-to-bottom">
              <div className="txt">
                <h1 className='fade-in-text'>JAVA</h1>
                <p>Intermediate</p>
              </div>
              <div className="ico-card">
                <i><LiaJava /></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3 right-to-left">
              <div className="txt">
                <h1 className='fade-in-text'>C++</h1>
                <p>Beginner</p>
              </div>
              <div className="ico-card">
                <i><TbBrandCpp/></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-1 left-to-right">
              <div className="txt">
                <h1 className='fade-in-text'>Bootstrap</h1>
                <p>Advanced</p>
              </div>
              <div className="ico-card">
                <i><FaBootstrap/></i>
              </div>
            </div>
          </div> 
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-2 top-to-bottom">
              <div className="txt">
                <h1 className='fade-in-text'>Cypress</h1>
                <p>Beginner</p>
              </div>
              <div className="ico-card">
                <i><TbBrandCypress /></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <div className="card gr-3 right-to-left">
              <div className="txt">
                <h1 className='fade-in-text'>COBOL</h1>
                <p>Beginner</p>
              </div>
              <div className="ico-card">
                <i><TbBrandCpp/></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </React.Fragment>
  )
}

export default Skills