import React from 'react'
import './Body.scss'
const Body = () => {
  return (
    <div className='port-body'>
   <div className="main">


    {/* //////////////////navbar////////////////////////// */}
   <div className="navbar-main">
    <div className="navbar">
        <div className="navitems">
          <div className="navlink"><a href="">HOME</a></div>
          <div className="navlink"><a href="">ABOUT</a></div>
          <div className="navlink"><a href="">MY WORKS</a></div>
          <div className="navlink"><a href="">SERVICES</a></div>
          <div className="navlink"><a href="">CONTACT</a></div>
        </div>
    </div>
</div>
{/* ////////////////////////////////// */}



{/* ////////////////////////////body////////////////// */}
<div className="name-banner-main">
        <div className="name-banner-left">
          <div className="content">
            <p className='hi-am'>Hi I am..</p>
            <h1  data-aos="fade-up" className='name'>FATHIMA <span>HANNA</span></h1>
            <div className="typewriter"><p className='typing'>I'm Web Developer</p></div>
            {/* <a href="./../public/Screenshot 2024-01-10 145343.png" download>Download CV</a> */}
          </div>
        </div>
        <div className="name-banner-right">
          <div className="photo"><img src="/public/[removal.ai]_e2af001a-93fe-4658-b8af-bcc427b9b4c8-whatsapp-image-2024-01-21-at-16-10-25_6be564cf.png" alt="" /></div>
        </div>
      </div>
   </div>
    </div> 
  )
}

export default Body
