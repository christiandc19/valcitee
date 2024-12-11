import React from 'react'
import LevelsOfCareSection from './LevelsOfCareSection'
import ContactForm from '../../LandingPage/ContactForm'
import './LevelsOfCare.css'
import Mission from '../../LandingPage/Mission'
import Fade from "react-reveal/Fade";

const LevelsOfCare = () => {
return (

<>        
<div className='levels-of-care-hero main-menu'>
            <Fade bottom duration={2000}>
                <div className="levels-of-care-hero-content">
                  <h1>Addiction Treatment Levels of Care</h1>
                </div>
            </Fade>
     </div>
<LevelsOfCareSection />
<Mission />
<ContactForm />
</>

    )
}

export default LevelsOfCare
