import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar" name="top">
      <div className="nav-box container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="logo" loading="lazy" />
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        
          <li><Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Home</Link></li>
          <li><Link to="/treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Treatment</Link></li>

          {/* Dropdown for Program Options */}
          <li className="dropdown">
              <Link to="/levels-of-care" onClick={() => { closeMenu(); scrollToTop(); }}>
            Levels of Care
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/addiction-program" onClick={() => { closeMenu(); scrollToTop(); }}>Addiction Treatment Program</Link></li>
              <li><Link to="/detox-program" onClick={() => { closeMenu(); scrollToTop(); }}>Detox Program</Link></li>
              <li><Link to="/outpatient-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Outpatient</Link></li>
              <li><Link to="/inpatient-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Inpatient</Link></li>
              <li><Link to="/dual-diagnosis-program" onClick={() => { closeMenu(); scrollToTop(); }}>Dual Diagnosis</Link></li>
              <li><Link to="/medication-assisted-program" onClick={() => { closeMenu(); scrollToTop(); }}>Medication Assisted Treatment</Link></li>
              <li><Link to="/veterans-addiction-treatment-program" onClick={() => { closeMenu(); scrollToTop(); }}>Veterans' Addiction Treatment</Link></li>
            </ul>
          </li>

          {/* Dropdown for What We Treat */}
          <li className="dropdown">
              <Link to="/what-we-treat" onClick={() => { closeMenu(); scrollToTop(); }}>
              What We Treat
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/alcoholism" onClick={() => { closeMenu(); scrollToTop(); }}>Alcoholism</Link></li>
              <li><Link to="/cocaine-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Cocaine Addiction</Link></li>
              <li><Link to="/fentanyl-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Fentanyl Addiction</Link></li>
              <li><Link to="/meth-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Meth Addiction</Link></li>
              <li><Link to="/prescription-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Prescription Drug Addiction</Link></li>
              <li><Link to="/kratom-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Kratom</Link></li>
              <li><Link to="/cannabis-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Cannabis Addiction</Link></li>
              <li><Link to="/benzo-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Benzo Addiction</Link></li>
              <li><Link to="/painkiller-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Painkiller Addiction</Link></li>
              <li><Link to="/inhalant-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Inhalant Addiction</Link></li>
            </ul>
          </li>

          {/* Dropdown for Rehab */}
          <li className="dropdown">
            <Link to="#" role="button" aria-haspopup="true" aria-expanded={isMenuOpen ? 'true' : 'false'}>
              Rehab Programs
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/drug-addiction-treatment" onClick={() => { closeMenu(); scrollToTop(); }}>Drug Rehab</Link></li>
              <li><Link to="/heroin-program" onClick={() => { closeMenu(); scrollToTop(); }}>Heroin Rehab</Link></li>
              <li><Link to="/xanax-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Xanax Rehab</Link></li>
              <li><Link to="/ativan-rehab" onClick={() => { closeMenu(); scrollToTop(); }}>Ativan Rehab</Link></li>
            </ul>
          </li>

          {/* Dropdown for Detoxification */}
          <li className="dropdown">
            <Link to="#" role="button" aria-haspopup="true" aria-expanded={isMenuOpen ? 'true' : 'false'}>
              Detoxification
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/alcohol-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Alcohol Detox</Link></li>
              <li><Link to="/cocaine-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Cocaine Detox</Link></li>
              <li><Link to="/fentanyl-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Fentanyl Detox</Link></li>
              <li><Link to="/meth-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Meth Detox</Link></li>
              <li><Link to="/benzo-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Benzo Detox</Link></li>
              <li><Link to="/medical-detoxification" onClick={() => { closeMenu(); scrollToTop(); }}>Medical Detox</Link></li>
            </ul>
          </li>
          <li><Link to="/sober-living" onClick={() => { closeMenu(); scrollToTop(); }}>Sober Living</Link></li>

          <li><Link to="/about" onClick={() => { closeMenu(); scrollToTop(); }}>About</Link></li>

          <li><Link to="/contact" onClick={() => { closeMenu(); scrollToTop(); }}>Contact</Link></li>

        </ul>
        </div>

    </nav>
  );
};

export default Navbar;
