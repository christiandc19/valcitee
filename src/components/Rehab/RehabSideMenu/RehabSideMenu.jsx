import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

import './RehabSideMenu.css'

const RehabSideMenu = () => {

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      };

  return (
    <div className='rehab-menu'>
        <h1>More Rehab Options</h1>
        <Link to="/drug-addiction-treatment" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Drug Rehab</p></Link>
        <Link to="/heroin-program" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Heroin Rehab</p></Link>
        <Link to="/xanax-rehab" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Xanax Rehab</p></Link>
        <Link to="/ativan-rehab" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Ativan Rehab</p></Link>
    </div>
  )
}

export default RehabSideMenu