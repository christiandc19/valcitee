import React from 'react'
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import logo from "../assets/logo-wh.png";
import "./Footer.css";


const Footer = () => {

  return (
    <>
      <div className="footer ">
        <div>

            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/">
                    <img src={logo} alt="Sacramento Rehab Logo" loading="lazy"/>
                  </Link>
              </LinkRoll>
                <div>
                <p><a href="tel:(323) 818-3648"> +1 (323) 818-3648</a></p>
                <p>4100 Moorepark Ave, Suite 124 <br />San Jose, CA 95117</p>
                <br/>
                <p><a href="mailto:Info@mightyoaksrecovery.biz">Email Us: Info@mightyoaksrecovery.biz</a></p>
                </div>
            </div>

          <div className="top container">
            <div className="column">
              <h3>COMPANY</h3>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/" >
                  <p>Home</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/about" >
                  <p>About</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/contact">
                  <p>Contact</p>
                </Link>
              </LinkRoll>
            </div>
            
            <div className="column">
              <h3>Program Options</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/inpatient-rehab" >
                  <p>Inpatient Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/outpatient-rehab">
                  <p>Outpatient Programs</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/detox-program" >
                  <p>Detox Program</p>
                </Link>
              </LinkRoll>
            </div>


            <div className="column">
              <h3>Rehab Programs</h3>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/drug-addiction-treatment">
                  <p>Drug Addiction Rehab</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/heroin-program">
                  <p>Heroin</p>
                </Link>
              </LinkRoll>

              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/xanax-rehab">
                  <p>Xanax</p>
                </Link>
              </LinkRoll>
            </div>





          </div>
            <div className='copyright'>
            <p>
              &copy; 2024 Mighty Oaks Recovery. All rights reserved
            </p>
            </div>


        </div>
      </div>
    </>
  );
};

export default Footer;
