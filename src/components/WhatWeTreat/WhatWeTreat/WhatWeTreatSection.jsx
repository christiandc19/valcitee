import React from 'react';
import './WhatWeTreatSection.css';
import WhatWeTreat from '../../../assets/what-we-treat-page-section.webp'; 
import WhatWeTreatMenu from '../../WhatWeTreat/WhatWeTreatMenu/WhatWeTreatMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';



const WhatWeTreatSection = () => {
  return (
    <section className="what-we-treat-section container">
      <div className="what-we-treat-section-content">
        {/* Sidebar */}
        <aside className="what-we-treat-section-sidebar">
          <WhatWeTreatMenu />
        <br />
          <SidebarInsurance />
        </aside>

        {/* Main Content */}
        <div className="what-we-treat-section-caption">
          {/* Header */}
          <header className="what-we-treat-section-header">
            <h1>Substance Abuse We Treat</h1>
            <p>
            At Mighty Oaks Recovery, we are committed to providing compassionate, evidence-based care to individuals struggling with substance abuse. Our experienced team of professionals offers a comprehensive approach tailored to meet the unique needs of every client, ensuring a path toward lasting recovery and wellness.
            </p>
          </header>

          {/* Alcohol Addiction */}
          <div className="what-we-treat-section-flex">
            <div className="what-we-treat-section-flex-caption">
              <h2>Alcohol Addiction</h2>
              <p>
              Alcohol addiction can disrupt lives and relationships, but recovery is possible with the right support. Our specialized programs focus on physical detoxification, behavioral therapies, and life skills training to help clients regain control and achieve sobriety.
              </p>            
              </div>
          </div>

            <div className="what-we-treat-section-flex-image">
              <img src={WhatWeTreat} alt="Supportive sober living environment" loading="lazy" />
            </div>

          {/* Prescription Drug Addiction */}
          <div className="what-we-treat-section-flex flex-reverse">

            <div className="what-we-treat-section-flex-caption">
              <h2>Prescription Drug Addiction</h2>
              <p>
              Misuse of prescription drugs is a growing concern, and our team is equipped to address addictions to opioids, benzodiazepines, and other medications. We combine medical management with counseling to safely and effectively guide clients through the recovery process.
              </p>

              <h2>Opioid Addiction</h2>
              <p>The opioid crisis has impacted countless lives, but hope and healing are within reach. Our opioid addiction treatment includes medically supervised detox, medication-assisted therapy (MAT), and ongoing support to prevent relapse and build resilience.</p>

              <h2> Methamphetamine Addiction</h2>
              <p>Methamphetamine abuse can lead to severe physical and mental health challenges. At Mighty Oaks Recovery, we offer an integrated approach that includes behavioral therapies, nutritional support, and relapse prevention strategies to foster long-term recovery.</p>
              
              <h2>Cocaine Addiction</h2>
              <p>Cocaine addiction can have devastating effects, but our evidence-based treatments focus on addressing both the physical and psychological aspects of dependence. Through therapy and personalized care, we help clients rebuild their lives.</p>

              <h2>Heroin Addiction</h2>
              <p>Heroin addiction requires specialized care to overcome its powerful grip. Our program includes detox services, MAT, and comprehensive counseling to support clients as they reclaim their lives from heroin dependency.</p>

              <h2>Other Substances</h2>
              <p>In addition to the specific substances mentioned, we also treat addictions to marijuana, hallucinogens, inhalants, and other substances. No matter the challenge, our team is dedicated to providing the support and resources necessary for recovery.</p>

            </div>


          </div>
        </div>
      </div>

    </section>

    
  );
};

export default WhatWeTreatSection;
