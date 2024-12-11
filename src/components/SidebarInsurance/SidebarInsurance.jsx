 import React from 'react'
 import './SidebarInsurance.css'
 import Aetna from '../../assets/aetna.png'
 import Anthem from '../../assets/anthem.png'
 import Beacon from '../../assets/beacon.png'
 import BlueCross from '../../assets/bluecross.png'
 import Cigna from '../../assets/cigna.png'
 import Horizon from '../../assets/horizon-wh.png'
const SidebarInsurance = () => {
  return (
    <div className='sidebar-insurance'>
        <div className='sidebar-header'>
            <h1>WE WORK WITH MAJOR INSURANCE</h1>
            <p>At Mighty Oaks Recovery, we believe that quality healthcare should be accessible to all. That's why we're committed to working with a wide range of insurance providers to ensure our patients can receive the care they need without added financial stress. Explore our comprehensive list of accepted insurances above.</p>
        </div>
        <div className='sidebar-insurance-flex'>
            <div className='sidebar-insurance-flexItem'>
                <img src={Aetna} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Anthem} alt='Aetna Insurance' loading='lazy'/>
            </div>

            <div className='sidebar-insurance-flexItem'>
                <img src={BlueCross} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Beacon} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Cigna} alt='Aetna Insurance' loading='lazy'/>
            </div>
            <div className='sidebar-insurance-flexItem'>
                <img src={Horizon} alt='Aetna Insurance' loading='lazy'/>
            </div>



        </div>
    </div>
  )
}

export default SidebarInsurance
