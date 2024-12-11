import React from 'react'
import TreatmentSection from '../Treatment/TreatmentSection'
import ContactForm from '../LandingPage/ContactForm'
import './Treatment.css'
import Mission from '../LandingPage/Mission'
import Fade from "react-reveal/Fade";

const Treatment = () => {
return (

<>        
<div className='treatment-hero main-menu'>
            <Fade bottom duration={3000}>
                <div className="treatment-hero-content">
                  <h1>Addiction Treatment in <br/><span>San Jose,</span> California</h1>
                </div>
            </Fade>
     </div>
<TreatmentSection />
<Mission />
<ContactForm />
</>

    )
}

export default Treatment
