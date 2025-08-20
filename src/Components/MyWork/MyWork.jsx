import React from 'react'
import './MyWork.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        <img src={project1} alt="" />
        <img src={project2} alt="" />
        <img src={project3} alt="" />
        <img src={project4} alt="" />
        <img src={project5} alt="" />
        <img src={project6} alt="" />
      </div>
      <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" srcset="" />
      </div>
    </div>
  )
}

export default MyWork
