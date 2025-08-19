import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.svg'



const about = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque. Optio temporibus, aspernatur ratione, natus, voluptate ullam magni deserunt itaque animi reiciendis dolorum. Cumque maiores nobis vel quis recusandae asperiores.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque. Optio temporibus, aspernatur ratione, natus, voluptate ullam magni deserunt itaque animi reiciendis dolorum. Cumque maiores nobis vel quis recusandae asperiores.</p>

                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>html & css</p> <hr style={{ width: "50%" }}></hr></div>
                        <div className="about-skill"><p>html & css</p> <hr style={{ width: "70%" }}></hr></div>
                        <div className="about-skill"><p>html & css</p> <hr style={{ width: "60%" }}></hr></div>
                        <div className="about-skill"><p>html & css</p> <hr style={{ width: "50%" }}></hr></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default about
