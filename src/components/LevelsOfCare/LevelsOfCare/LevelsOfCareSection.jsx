import React from 'react';
import './LevelsOfCareSection.css';
import LevelsOfCareSection1 from '../../../assets/levels-of-care-page-section.webp'; 
import ProgramOptionsMenu from '../../LevelsOfCare/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../../SidebarInsurance/SidebarInsurance';



const LevelsOfCareSection = () => {
  return (
    <section className="levels-of-care-section container">
      <div className="levels-of-care-section-content">
        {/* Sidebar */}
        <aside className="levels-of-care-section-sidebar">
          <ProgramOptionsMenu />
          <br />
          <SidebarInsurance />
        </aside>

        {/* Main Content */}
        <div className="levels-of-care-section-caption">
          {/* Header */}
          <header className="levels-of-care-section-header">
            <h1>Levels of Care at Mighty Oaks Recovery</h1>
            <p>
            At Mighty Oaks Recovery, we offer a comprehensive range of treatment options designed to meet each individual's unique needs. Our levels of care provide a structured pathway to recovery, ensuring patients receive the right support at every stage of their journey.
            </p>
          </header>

          {/* Addiction Treatment*/}
          <div className="levels-of-care-section-flex">
            <div className="levels-of-care-section-flex-caption">
              <h2>Medical Detox</h2>
              <p>
              Medical Detox is the first step for those struggling with substance dependence. Under the supervision of our medical team, patients undergo a safe and comfortable withdrawal process. This level of care focuses on stabilizing individuals and preparing them for the next stages of treatment.
              </p>            
              </div>
          </div>

            <div className="levels-of-care-section-flex-image">
              <img src={LevelsOfCareSection1} alt="Portrait of professional psychologist wearing eyeglasses comforting sad Latin woman" loading="lazy" />
            </div>

          {/* FNon-12 Step Rehab Program */}
          <div className="levels-of-care-section-flex flex-reverse">

            <div className="levels-of-care-section-flex-caption">
              <h2>Residential Treatment</h2>
              <p>
              Our Residential Treatment program provides 24/7 support in a structured, therapeutic environment. This immersive level of care allows patients to focus fully on recovery, free from external distractions, while participating in evidence-based therapies and holistic activities.
              </p>

              <h2>Partial Hospitalization Program (PHP)</h2>
              <p>HP offers intensive treatment during the day while allowing patients to return to a supportive living environment in the evenings. This level is ideal for those transitioning from residential care or requiring more structure than outpatient programs.</p>

              <h2> Intensive Outpatient Program (IOP)</h2>
              <p>IOP is designed for individuals who need flexibility while maintaining a high level of care. Patients attend therapy sessions several times a week, enabling them to balance recovery with work, school, or family commitments.</p>
              
              <h2>Outpatient Program</h2>
              <p>Our Outpatient Program provides ongoing support and therapy for those who have achieved stability in their recovery. This level of care helps patients maintain progress and build resilience as they reintegrate into everyday life.</p>

              <h2>Aftercare Support</h2>
              <p>Recovery is a lifelong journey, and our Aftercare and Alumni Support programs ensure patients remain connected to a supportive community. These programs include regular check-ins, group meetings, and resources to help sustain long-term sobriety.</p><br />
              <p>At Mighty Oaks Recovery, we are committed to offering personalized care that empowers individuals to achieve lasting recovery. Contact us today to learn more about our programs and start your path to healing.</p>

            </div>


          </div>
        </div>
      </div>

    </section>

    
  );
};

export default LevelsOfCareSection;
