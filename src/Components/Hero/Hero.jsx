import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.webp'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = ({name}) => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1 ><span className='heading'> I'm {name} , </span><br></br>Full Stack Developer(Mern)</h1>
      <p>I'm a passionate MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I love creating scalable, efficient, and user-friendly digital solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
           <a 
            href="https://drive.google.com/file/d/170sihXH9CNj0jTIecf4nHaB4CDmimFza/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
