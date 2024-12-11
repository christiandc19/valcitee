import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

import './WhatWeTreatMenu.css'

const WhatWeTreatMenu = () => {

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      };

  return (
    <div className='whatWeTreat-menu'>
        <h1> More Addiction Treatment Options</h1>
        <Link to="/alcoholism" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Alcoholism</p></Link>
        <Link to="/cocaine-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Cocaine Addiction</p></Link>
        <Link to="/fentanyl-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Fentanyl Addiction</p></Link>
        <Link to="/meth-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Meth Addiction</p></Link>
        <Link to="/prescription-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Prescription Drug Addiction</p></Link>
        <Link to="/kratom-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Kratom</p></Link>
        <Link to="/cannabis-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Cannabis Addiction</p></Link>
        <Link to="/benzo-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Benzo Addiction</p></Link>
        <Link to="/painkiller-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Painkiller Addiction</p></Link>
        <Link to="/inhalant-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Inhalant Addiction</p></Link>
    </div>
  )
}

export default WhatWeTreatMenu