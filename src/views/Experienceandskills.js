import React, { useState } from 'react'
import Skills from './Skills';
import Experience from './Experience';

const Experienceandskills = () => {
  const [defaultTab, newTab] = useState('skills');

  const changeTabs = () => {
    newTab(defaultTab == 'skills' ? 'experience' : 'skills')
  }

  return (
    <React.Fragment><br/>
      <div className="container">
        <div className=' d-flex flex-row title'>
          <p className={defaultTab === 'skills' ? 'text-white bg-dark bg-gradient p-2 rounded' : 'text-gray p-2'}>Skills</p>
          <hr className='w-5 border-2 mt-4 me-3' style={{color:'white'}}/>
          <p className={defaultTab === 'experience' ? 'text-white bg-dark bg-gradient p-2 rounded' : 'text-gray p-2'}>Experience</p>
        </div>
        <button className ="view-button" onClick={() => {changeTabs()}}>VIEW {defaultTab === 'skills' ? 'EXPERIENCE' : 'SKILLS'}</button>
        {defaultTab === 'skills' ? <Skills/> : <Experience/>}   
      </div> 
    </React.Fragment>
  )
}

export default Experienceandskills