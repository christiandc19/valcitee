import React from 'react';
import './SoberLivingSection.css';
import SoberLivingImage1 from '../../assets/sober_living_1.webp'; 
import SoberLivingImage2 from '../../assets/sober_living_2.webp';
import ProgramOptionsMenu from '../LevelsOfCare/ProgramOptionsMenu/ProgramOptionsMenu';
import SidebarInsurance from '../SidebarInsurance/SidebarInsurance';

const SoberLivingSection = () => {
  return (
    <section className="sober-living-section container">
      <div className="sober-living-section-content">
        {/* Sidebar */}
        <aside className="sober-living-section-sidebar">
          <ProgramOptionsMenu />
          <br />
          <SidebarInsurance />
        </aside>

        {/* Main Content */}
        <div className="sober-living-section-caption">
          {/* Header */}
          <header className="sober-living-section-header">
            <h1>Sober Living Programs</h1>
            <p>
              At Mighty Oaks Recovery, our Sober Living programs provide a structured and supportive environment to help individuals maintain their recovery journey. Designed for those transitioning from treatment to independent living, our sober living homes foster accountability, community, and long-term sobriety.
            </p>
          </header>

          {/* Benefits of Sober Living */}
          <div className="sober-living-section-flex">
            <div className="sober-living-section-flex-caption">
              <h2>Why Choose Sober Living?</h2>
              <p>
                Sober living homes offer a bridge between rehabilitation and returning to daily life. Our programs focus on creating a safe, substance-free environment where residents can build healthy routines, develop life skills, and strengthen their commitment to sobriety. 
              </p>
              <p>
                Residents benefit from peer support, structured schedules, and access to recovery resources like counseling, job placement assistance, and relapse prevention strategies. These homes provide the stability and guidance needed to achieve a smooth transition back to independence.
              </p>
            </div>
            <div className="sober-living-section-flex-image">
              <img src={SoberLivingImage1} alt="Supportive sober living environment" loading="lazy" />
            </div>
          </div>

          {/* Features of Sober Living Homes */}
          <div className="sober-living-section-flex flex-reverse">
            <div className="sober-living-section-flex-image">
              <img src={SoberLivingImage2} alt="Sober living community gathering" loading="lazy" />
            </div>
            <div className="sober-living-section-flex-caption">
              <h2>What to Expect in Sober Living</h2>
              <p>
                Our sober living homes provide a community-driven environment where residents support one another on their recovery journeys. Key features of our program include:
              </p>
              <ul>
                <li>Regular group meetings to reinforce accountability</li>
                <li>Drug and alcohol testing to maintain a safe environment</li>
                <li>Access to professional counseling and therapy services</li>
                <li>Opportunities for life skill development, such as financial planning and time management</li>
                <li>Support with job placement and educational resources</li>
                <li>24/7 staff availability for guidance and emergencies</li>
              </ul>
              <p>
                At Mighty Oaks Recovery, we believe that sober living is an essential step for individuals who are serious about their long-term recovery goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoberLivingSection;
