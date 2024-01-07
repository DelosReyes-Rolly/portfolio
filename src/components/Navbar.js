import React from 'react'
import {NavLink} from "react-router-dom";
import {FaHamburger} from 'react-icons/fa';

const Navbar = () => {

 

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg sticky-top py-3 px-2" style={{backgroundColor: 'black'}}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-white" href="/">
            <div className='nav-header'>Rolly's Portfolio</div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaHamburger/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <span className="nav-link"><NavLink to='/' className='nav-title'>Home</NavLink></span>
              </li>
              <li className="nav-item">
                <span className="nav-link"><NavLink to='/projects' className='nav-title'>Projects</NavLink></span>
              </li>
              <li className="nav-item">
                <span className="nav-link"><NavLink to='/experienceandskills' className='nav-title'>Skills and Experience</NavLink></span>
              </li>
              <li className="nav-item">
                <span className="nav-link"><NavLink to='/contact' className='nav-title'>Contact Me</NavLink></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar