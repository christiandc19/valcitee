import React from 'react'
import './AboutPage.css'
import Fade from "react-reveal/Fade";

import ContactForm from '../LandingPage/ContactForm'
import OurValues from '../About/OurValues'
import Accordion from '../LandingPage/AccordionProps'


const AboutPage = () => {
    return (
<>        
<div className='about-hero main-menu'>
            <Fade bottom duration={2000}>
                <div className="about-hero-content">
                  <h1>About Us</h1>
                </div>
            </Fade>
     </div>
<OurValues />
<Accordion />
<ContactForm />
</>


    )
}

export default AboutPage
