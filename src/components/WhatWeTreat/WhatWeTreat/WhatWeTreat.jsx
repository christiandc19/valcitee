import React from 'react'
import WhatWeTreatSection from './WhatWeTreatSection'
import ContactForm from '../../LandingPage/ContactForm'
import './WhatWeTreat.css'
import Mission from '../../LandingPage/Mission'
import Fade from "react-reveal/Fade";

const WhatWeTreat = () => {
return (

<>        
<div className='what-we-treat-hero main-menu'>
            <Fade bottom duration={2000}>
                <div className="what-we-treat-hero-content">
                  <h1>What We Treat at<br/><span>Mighty Oaks Recovery</span></h1>
                </div>
            </Fade>    
     </div>
<WhatWeTreatSection />
<Mission />
<ContactForm />
</>

    )
}

export default WhatWeTreat
