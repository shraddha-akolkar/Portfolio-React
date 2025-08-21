import React from 'react';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import axios from 'axios';

const Contact = () => {
  const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.append("access_key", "2aeb4438-d656-43fd-a467-9c5f45ac733b");

  try {
    const result = await axios.post("https://api.web3forms.com/submit",  formData
    );
    
    console.log("Response:", result);
    if (result.status) {
      alert("Success! " + result.data.message);
      event.target.reset();
    } else {
      alert("Error: " + result.message);
    }
  } catch (error) {
    console.error("Submit error:", error);
    alert("Network error. Please try again.");
  }
};


  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm Always open to opportunities in Full Stack Web Development (MERN) where I can create real impact, grow as a developer, and contribute to innovative teams.Let’s connect and build something meaningful together!</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>shraddha@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Pune, Maharashtra</p>
            </div>
            
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Your Message</label>
          <textarea name="message" placeholder="Enter your message" required></textarea>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;