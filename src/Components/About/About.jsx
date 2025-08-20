import React from 'react'
import './About.css'
import profile_img from '../../assets/profile.png'



const about = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a motivated Full Stack Web Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and experience building scalable and responsive web applications.</p>
                        <p>Skilled in both frontend and backend development, I enjoy designing dynamic user interfaces with React, Tailwind CSS, and Bootstrap, while also implementing secure REST APIs and backend logic. I’m a fast learner, collaborative team player, and problem solver who loves creating efficient, maintainable, and impactful solutions.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: "60%" }}></hr></div>
                        <div className="about-skill"><p>REACT JS</p> <hr style={{ width: "70%" }}></hr></div>
                        <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{ width: "60%" }}></hr></div>
                        <div className="about-skill"><p>NODEJS</p> <hr style={{ width: "50%" }}></hr></div>
                    </div>
                </div>
            </div>
            
        </div>


    )
}

export default about
