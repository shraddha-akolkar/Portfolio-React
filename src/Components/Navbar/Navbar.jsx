import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import image1 from '../../assets/name_logo.png'




const Navbar = () => {
  return (
    


    <div className="navbar">
 <div className="nav-logo">§</div>
    <div className='nav-menu-list'>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'>Portfolio</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
    
      </ul>
     </div>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> </div>

    
    </div>
  )
}

export default Navbar
