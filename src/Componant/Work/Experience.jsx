import React from 'react'
import './Experience.scss'

const Experience = () => {
  return (
    <div>
       <div  className="wrkExperienceMain">
    <div className="heading">
    <h1>My Work <span>Experience</span></h1>
    </div>
    <div className="expirience">
        <div className="expirience_left">
          <div className="Exprnce_left_contents">
          <h4>Synnefo Solutions Pvt.ltd</h4>
            <p>June 2023 - January 2024</p>
          </div>
        </div>
        <div className="line"></div>
        <div className="expirience_right">
            <div className="expirience_contents">
            <h4>MERN Stack Developer</h4>
            <p>I have successfully completed a 6-month internship with the MERN stack in Synnefo Solutions Pvt.Ltd.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Experience
