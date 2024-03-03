import React, { useEffect, useState } from 'react'
import './Projects.scss'


const Projects = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;
  //   const triggerPoint = window.innerHeight * 0.7; // Adjust this value as needed

  //   if (scrollY > triggerPoint) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className='projects-main-div'>
       <div className='fade-up' >
       <div className="heading">
            <h1>My Latest <span>Projects</span></h1>
        </div>
        <div className="projects_main">
            <div className= 'fade-up'><img src="./project 1.png" alt="" /></div>
            <div className='fade-up'><img src="./project 2.png" alt="" /></div>
            <div className='fade-up'><img src="./project 3.png" alt="" /></div>
        </div>
       </div>
    </div>
  )
}

export default Projects
