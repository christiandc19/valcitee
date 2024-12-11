import React, { useState } from 'react';
import './AccordionMenu.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Initial state set to true (open)

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-menu">
      <button
        className="accordion-menu-button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        Overview
        <span className="accordion-icon">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div className={`accordion-menu-content ${isOpen ? 'open' : ''}`}>
        <h1>Treatment Options</h1>
        <ul>
          <li>Full-time care at a treatment center</li>
          <li>Extended residential programs</li>
          <li>Short-term housing with treatment</li>
          <li>In-house detoxification services</li>
        </ul>

        <h1>Approaches to Care</h1>
        <ul>
          <li>Support groups with structured steps</li>
          <li>Behavioral therapy techniques</li>
          <li>Motivational reward systems</li>
          <li>Strategies to prevent relapses</li>
          <li>Counseling focused on past trauma</li>
          <li>Guidance on substance-free living</li>
          <li>Techniques to strengthen motivation</li>
          <li>Quick interventions for urgent needs</li>
          <li>Skills to manage emotional triggers</li>
        </ul>

        <h1>Supportive Services</h1>
        <ul>
          <li>Career advice and training</li>
          <li>Community-led recovery meetings</li>
          <li>Peer support and mentoring</li>
          <li>Personalized coaching for recovery</li>
        </ul>

        <h1>Counseling and Education Programs</h1>
        <ul>
          <li>Group discussions</li>
          <li>Relationship-focused counseling</li>
          <li>Family-focused therapy</li>
          <li>Programs to quit smoking or vaping</li>
          <li>Education on preventing infections</li>
          <li>Awareness sessions on substance use</li>
          <li>General wellness and health talks</li>
          <li>One-on-one emotional guidance</li>
          <li>Awareness on liver health and care</li>
        </ul>
      </div>
    </div>
  );
};

export default AccordionMenu;
