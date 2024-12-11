import React from 'react';
import './FentanylDetoxification.css';
import SideBarInsurance from '../SidebarInsurance/SidebarInsurance';
import FentanylImage from '../../assets/fentanyl-detoxification-section.webp'; // Update with appropriate image
import DetoxificationMenu from './DetoxificationMenu/DetoxificationMenu';
import ContactForm from '../LandingPage/ContactForm';
import Mission from '../LandingPage/Mission';
import AccordionMenu from '../WhatWeTreat/AccordionMenu';

const FentanylDetoxification = () => {
  return (
    <>
      <div className='fentanyl-detox'>
        <div className='fentanyl-detox-content'>
          <div className='fentanyl-detox-hero'>
            <div className='fentanyl-detox-image-caption'>
              <h1>Mighty Oaks Fentanyl Detoxification</h1>
            </div>
          </div>

          <div className='fentanyl-detox-flex container'>
            <div className='fentanyl-detox-menu'>
              <DetoxificationMenu />
              <br />
              <AccordionMenu />
              <br />
              <SideBarInsurance />
            </div>

            <div className='fentanyl-detox-caption'>
              <h1>Fentanyl Detoxification: A Path to Recovery</h1>
              <h2>What is Fentanyl Detoxification?</h2>
              <p>
                Fentanyl detoxification is the process of removing fentanyl and its
                toxic byproducts from the body while addressing withdrawal symptoms.
                This critical first step helps manage the severe withdrawal symptoms
                and sets the foundation for long-term recovery.
              </p>

              <h2>Why is Fentanyl Detox Important?</h2>
              <p>
                Fentanyl is a powerful synthetic opioid that can cause the body and
                brain to develop a strong physical dependence. When use is discontinued,
                individuals experience severe withdrawal symptoms, including pain, cravings,
                nausea, and depression. Detoxification is essential to safely manage these
                symptoms and reduce the risk of relapse.
              </p>

              <h2>What to Expect During Fentanyl Detox</h2>
              <p>
                Fentanyl detox is a medically supervised process focused on comfort and safety.
                Key aspects include:
                <ul>
                  <li>
                    <strong>Medical Monitoring:</strong> Health professionals monitor withdrawal
                    symptoms and provide care if complications arise.
                  </li>
                  <li>
                    <strong>Supportive Therapies:</strong> Counseling and emotional support are
                    provided to help individuals manage psychological distress.
                  </li>
                  <li>
                    <strong>Medications:</strong> Medications may be provided to reduce withdrawal
                    symptoms such as anxiety, pain, or nausea.
                  </li>
                </ul>
              </p>

              <h2>Common Withdrawal Symptoms</h2>
              <p>
                Fentanyl withdrawal symptoms can be severe and may include:
                <ul>
                  <li>Intense cravings for fentanyl</li>
                  <li>Severe muscle and bone pain</li>
                  <li>Fatigue and sleep disturbances</li>
                  <li>Severe anxiety and irritability</li>
                  <li>Depression and suicidal thoughts</li>
                  <li>Cold sweats, chills, and vomiting</li>
                </ul>
              </p>

              <div className='fentanyl-detox-image'>
                <img src={FentanylImage} alt='Fentanyl detox process' loading='lazy' />
              </div>

              <h2>How Long Does Detox Take?</h2>
              <p>
                The length of fentanyl detox depends on various factors, such as the length of
                use and the dosage. Acute withdrawal symptoms may begin within hours of the
                last use, with peak intensity occurring within the first 72 hours. Some symptoms
                may persist for several weeks, particularly cravings.
              </p>

              <h2>Detox vs. Treatment</h2>
              <p>
                Detoxification alone is not enough to overcome fentanyl addiction. While detox
                helps manage the physical symptoms of withdrawal, a comprehensive treatment
                program is necessary to address the emotional and psychological components
                of addiction.
              </p>

              <h2>Finding Support During Detox</h2>
              <p>
                A medically supervised detox program ensures that individuals undergo detox
                in a safe, supportive environment. Ongoing therapy and counseling are crucial
                for a successful recovery journey.
              </p>

              <h2>Take the First Step Today</h2>
              <p>
                Fentanyl detoxification is the first crucial step towards a life free from addiction.
                If you or a loved one is struggling with fentanyl use, professional support is
                available to guide you through recovery. Take that first step towards a healthier,
                substance-free future today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <ContactForm />
    </>
  );
};

export default FentanylDetoxification;
