import React from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import AboutUs from '../LandingPage/About';
import Insurance from './Insurance'
import Offer from '../LandingPage/Offer';
import Mission from '../LandingPage/Mission';
import RecBlock from '../LandingPage/RectBlock';
import Form from '../Contact/Form';
import Accordion from '../LandingPage/AccordionProps';
import BgVideo from '../../assets/hero-video.mov';
import { GiCheckMark } from "react-icons/gi";

const LandingPage = () => {

    return (
        <>
            {/* Hero Section */}
            <div className='hero'>
                <video 
                    src={BgVideo} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className='video-bg' 
                />
                <div className="hero-overlay"></div>

                <div className="hero-container container">
                    <div className='hero-caption'>
                        <div className="caption-item">
                            <h1>MIGHTY OAKS <br /><span>Recovery</span></h1>
                            <h2>San Jose California Premier Recovery Center</h2>

                            <div className="services-list">
                                <ul>
                                    <li><span><GiCheckMark /></span> Inpatient Rehab</li>
                                    <li><span><GiCheckMark /></span> Outpatient Addiction Rehab</li>
                                    <li><span><GiCheckMark /></span> Detoxification</li>
                                    <li><span><GiCheckMark /></span> Dual Diagnosis Treatment</li>
                                    <li><span><GiCheckMark /></span> Medication Assisted Treatment</li>
                                    <li><span><GiCheckMark /></span> Veterans Addiction Treatment</li>
                                    <li><span><GiCheckMark /></span> Sober Living</li>
                                </ul>
                            </div>
                            <div className="hero-btn">
                                <div className="hero-btn1"><a href="tel:3234350279"><button>Call Us Now</button></a></div>
                                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                <Link to="/treatment">
                                <div className="hero-btn2"><button>Learn More</button></div>
                                </Link>
                                </LinkRoll>
                            </div>
                        </div>
                        <div className="hero-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

            <Offer />
            <AboutUs />
            <Insurance />
            <Mission />
            <Accordion />
            <RecBlock />
        </>
    );
};

export default LandingPage;
