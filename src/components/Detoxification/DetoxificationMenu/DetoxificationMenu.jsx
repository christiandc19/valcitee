import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

import './DetoxificationMenu.css'

const DetoxificationMenu = () => {

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
      };

  return (
    <div className='detoxification-menu'>
        <h1>Detoxification Options</h1>
        <Link to="/alcohol-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Alcohol Detox</p></Link>
        <Link to="/cocaine-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Cocaine Detox</p></Link>
        <Link to="/fentanyl-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Fentanyl Detox</p></Link>
        <Link to="/meth-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Meth Detox</p></Link>
        <Link to="/benzo-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Benzo Detox</p></Link>
        <Link to="/medical-detoxification" onClick={handleLinkClick}><p><span><IoIosArrowDropright /></span> Medical Detox</p></Link>
    </div>
  )
}

export default DetoxificationMenu