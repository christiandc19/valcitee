import React from "react";
import Fade from "react-reveal/Fade";

import './Contact.css'
import ContactForm from "../LandingPage/ContactForm";


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade bottom duration={2000}>
                <div className="contact-hero-content">
                  <h1>Contact Us</h1>
                  <h2>Reach out to us for any inquiries, appointments, or assistance. </h2>
                  <p><a href="tel: (323) 818-3648"> +1  (323) 818-3648</a></p>
                  </div>
            </Fade>
            </div>
     </div>
     <ContactForm />
 
      </>
    )
}

export default Contact