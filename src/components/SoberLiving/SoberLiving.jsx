import React from 'react'
import SoberlivingSection from '../SoberLiving/SoberLivingSection'
import ContactForm from '../LandingPage/ContactForm'

import './SoberLiving.css'
import Mission from '../LandingPage/Mission'

const SoberLiving = () => {
return (

<>        
<div className='sober-living-hero main-menu'>
            <div className="sober-living-hero-content">
                <div className="sober-living-hero-content">
                  <h1>Sober Living</h1>
                </div>
            </div>
     </div>
<SoberlivingSection />
<Mission />
<ContactForm />
</>

    )
}

export default SoberLiving
