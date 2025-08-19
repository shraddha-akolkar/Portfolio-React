import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
// import image1 from '../../assets/name_logo.png'




const Navbar = () => {
  return (
    
    <div className="navbar">
    <img src={logo} alt="" />
{/* <img src={image1} /> */}
    <div className='nav-menu-list'>
      <ul className="nav-menu">
        <li>home</li>
        <li>about me</li>
        <li>services</li>
        <li>portfolio</li>
        <li>contact</li>
    
      </ul>
     </div>
      <div className="nav-connect">Connect with me </div>

    
    </div>
  )
}

export default Navbar
