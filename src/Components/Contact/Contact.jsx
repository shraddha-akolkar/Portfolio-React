import React from "react";
import axios from "axios";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2aeb4438-d656-43fd-a467-9c5f45ac733b");

    try {
      const result = await axios.post("https://api.web3forms.com/submit", formData);
      console.log("Response:", result);

      if (result.status === 200) {
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
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            I’d love to connect with you!  
            Whether it’s a project idea, job opportunity, or just to say hi —  
            feel free to drop me a message.  
          </p>
          <div className="info-item">
            <FaEnvelope className="icon" /> shraddhaaakolkar@gmail.com
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" /> Pune, Maharashtra
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="6" required />
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
