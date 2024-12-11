import React from 'react';
import './MedicalDetoxification.css';
import SideBarInsurance from '../SidebarInsurance/SidebarInsurance';
import MedicalDetoxImage from '../../assets/meth-detoxification-section.webp';
import DetoxificationMenu from './DetoxificationMenu/DetoxificationMenu';
import ContactForm from '../LandingPage/ContactForm';
import Mission from '../LandingPage/Mission';
import AccordionMenu from '../WhatWeTreat/AccordionMenu';

const MedicalDetoxification = () => {
  const sections = [
    {
      heading: 'What is Medical Detoxification?',
      paragraph: `Medical detoxification is the process of safely eliminating harmful substances, such as drugs or alcohol, from the body while managing withdrawal symptoms. It is the first and most critical step in the recovery journey, ensuring a safe foundation for further treatment.`,
    },
    {
      heading: 'Why is Medical Detox Important?',
      paragraph: `When someone is physically dependent on substances, abrupt cessation can lead to severe and potentially life-threatening withdrawal symptoms. Medical detox provides a controlled and supervised environment, reducing risks and ensuring the individual’s safety and comfort during the process.`,
    },
    {
      heading: 'What to Expect During Medical Detox',
      paragraph: `Medical detox is a structured process tailored to the individual’s needs. Key aspects include:`,
      list: [
        'Medical Assessment: Comprehensive evaluation of the individual’s physical and mental health.',
        'Symptom Management: Use of medications and therapies to alleviate withdrawal symptoms.',
        '24/7 Monitoring: Continuous supervision by healthcare professionals to ensure safety.',
      ],
    },
    {
      heading: 'Common Withdrawal Symptoms',
      paragraph: `Withdrawal symptoms vary depending on the substance but may include:`,
      list: [
        'Nausea and vomiting',
        'Sweating and shaking',
        'Anxiety and depression',
        'Sleep disturbances',
        'Severe cravings',
        'Seizures or hallucinations (in extreme cases)',
      ],
    },
  ];

  return (
    <>
      <div className="medical-detox">
        <div className="medical-detox-content">
          <div className="medical-detox-hero">
            <div className="medical-detox-image-caption">
              <h1>Mighty Oaks Medical Detoxification</h1>
            </div>
          </div>

          <div className="medical-detox-flex container">
            <div className="medical-detox-menu">
             <DetoxificationMenu />
              <br />
              <AccordionMenu />
              <br />
              <SideBarInsurance />
            </div>

            <div className="medical-detox-caption">
              <h1>Medical Detoxification: A Safe Start to Recovery</h1>
              {sections.map((section, index) => (
                <div key={index} className="medical-detox-section">
                  <h2>{section.heading}</h2>
                  <p>{section.paragraph}</p>
                  {section.list && (
                    <ul>
                      {section.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <div className="medical-detox-image">
                <img
                  src={MedicalDetoxImage}
                  alt="Illustration of the medical detoxification process"
                  loading="lazy"
                />
              </div>
              <h2>How Long Does Medical Detox Take?</h2>
              <p>
                The duration of medical detox depends on various factors, including the type of substance,
                the severity of dependence, and the individual’s overall health. Detox can take anywhere
                from a few days to a couple of weeks, ensuring a gradual and safe transition.
              </p>
              <h2>Detox vs. Comprehensive Treatment</h2>
              <p>
                While medical detox addresses physical dependence, comprehensive treatment focuses on
                the psychological, emotional, and social aspects of recovery. Therapy, counseling, and
                support groups play a vital role in achieving lasting sobriety.
              </p>
              <h2>Take the First Step Today</h2>
              <p>
                Medical detoxification is a crucial first step toward recovery. If you or a loved one
                is struggling with substance dependence, professional help is available. Start your
                journey toward a healthier, substance-free life today.
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

export default MedicalDetoxification;
