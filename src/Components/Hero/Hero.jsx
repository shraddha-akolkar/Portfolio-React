import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'


const Hero = ({name,city}) => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span className='heading'> I am {name} , </span>frontend developer based in {city}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, repellat! At voluptates ipsum ipsam eum est hic dolorem amet doloremque dolores. </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
