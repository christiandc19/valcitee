import React from "react";
import "./Insurance.css";

// Import your icons or images
import Aetna from '../../assets/aetna.webp';
import Antem from '../../assets/anthem.webp';
import Beacon from '../../assets/beacon.webp';
import Bluecross from '../../assets/bluecross.webp';
import Cigna from '../../assets/cigna.webp';
import Horizon from '../../assets/horizon.png';
import Couple from '../../assets/happy-couple.webp'

const Insurance = () => {
  return (
    <div className="insurance" >

      
      <div className="insurance-container container">
        <div className="insurance-header">
            <p>If you don’t see your insurance provider, please call us for a free, <br /><span>no-obligation insurance verification.</span></p>
        </div>
        <div className="insurance-category">
          <div className="insurance-icons">
              <div className="insurance-item">
                <img src={Aetna} alt="Aetna" />
              </div>
              <div className="insurance-item">
                <img src={Antem} alt="Anthem" />
              </div>
              <div className="insurance-item">
                <img src={Beacon} alt="Beacon" />
              </div>
              <div className="insurance-item">
                <img src={Bluecross} alt="Bluecross" />
              </div>

              <div className="insurance-item">
                <img src={Cigna} alt="Cigna" />
              </div>

              <div className="insurance-item">
                <img src={Horizon} alt="Horizon" />
              </div>
          </div>

          <div className="insurance-image">
              <img src={Couple} alt="Couple" loading="lazy"/>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Insurance;
