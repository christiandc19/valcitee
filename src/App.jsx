import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/About/AboutPage';
import LevelsOfCarePage from './components/LevelsOfCare/LevelsOfCare/LevelsOfCare';
import WhatWeTreatPage from './components/WhatWeTreat/WhatWeTreat/WhatWeTreat';
import TreatmentPage from './components/Treatment/Treatment';
import ContactPage from './components/Contact/Contact';
import Footer from './components/Footer';
import AddictionProgram from './components/LevelsOfCare/Addiction/AddictionProgram';
import DetoxProgram from './components/LevelsOfCare/DetoxProgram/DetoxProgram';
import OutpatientRehab from './components/LevelsOfCare/OutpatientRehab/OutpatientRehab';
import InpatientRehab from './components/LevelsOfCare/InpatientRehab/InpatientRehab';
import DualDiagnosisProgram from './components/LevelsOfCare/DualDiagnosis/DualDiagnosis';
import MATProgram from './components/LevelsOfCare/MATProgram/MAT';
import VeteransAddiction from './components/LevelsOfCare/VeteransAddiction/VeteransAddictionHero';

import DrugAddictionTreatment from './components/Rehab/DrugRehab/DrugAddiction';
import HeroinProgram from './components/Rehab/HeroinProgram/HeroinProgram';
import XanaxRehab from './components/Rehab/XanaxRehab/XanaxRehab';
import AtivanRehab from './components/Rehab/AtivanRehab/AtivanRehab';


import Alcoholism from './components/WhatWeTreat/Alcoholism'
import CocaineAddictionTreatment from './components/WhatWeTreat/CocaineAddiction'
import FentanylAddictionTreatment from './components/WhatWeTreat/FentanylAddiction'
import MethAddictionTreatment from './components/WhatWeTreat/MethAddiction'
import PrescriptionAddictionTreatment from './components/WhatWeTreat/PrescriptionAddiction'
import KratomAddictionTreatment from './components/WhatWeTreat/KratomAddiction'
import CannabisAddictionTreatment from './components/WhatWeTreat/CannabisAddiction'
import BenzoAddictionTreatment from './components/WhatWeTreat/BenzoAddiction'
import PainkillerAddictionTreatment from './components/WhatWeTreat/PainkillerAddiction'
import InhalantAddictionTreatment from './components/WhatWeTreat/InhalantAddiction'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

// Detoxification

import AlcoholDetoxification from './components/Detoxification/AlcoholDetoxification';
import CocainelDetoxification from './components/Detoxification/CocainelDetoxification';
import FentanylDetoxification from './components/Detoxification/FentanylDetoxification';
import MethDetoxification from './components/Detoxification/MethDetoxification';
import BenzoDetoxification from './components/Detoxification/BenzoDetoxification';
import MedicalDetoxification from './components/Detoxification/MedicalDetoxification';

// Sober Living

import SoberLiving from './components/SoberLiving/SoberLiving';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>

        {/* Home */}
        <Route path="/" element={<LandingPage />} />

        {/* Levels of care */}
        <Route path="/levels-of-care" element={<LevelsOfCarePage />} />

        {/* What We Treat */}
        <Route path="/what-we-treat" element={<WhatWeTreatPage />} />

        {/* Treatment */}
        <Route path="/treatment" element={<TreatmentPage />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />



        <Route path="/addiction-program" element={<AddictionProgram />} />
        <Route path="/detox-program" element={<DetoxProgram />} />
        <Route path="/outpatient-rehab" element={<OutpatientRehab />} />
        <Route path="/inpatient-rehab" element={<InpatientRehab />} />
        <Route path="/dual-diagnosis-program" element={<DualDiagnosisProgram />} />
        <Route path="/medication-assisted-program" element={<MATProgram />} />
        <Route path="/veterans-addiction-treatment-program" element={<VeteransAddiction />} />
        <Route path="/drug-addiction-treatment" element={<DrugAddictionTreatment />} />
        <Route path="/heroin-program" element={<HeroinProgram />} />
        <Route path="/xanax-rehab" element={<XanaxRehab />} />
        <Route path="/ativan-rehab" element={<AtivanRehab />} />

        <Route path="/alcoholism" element={<Alcoholism />} />
        <Route path="/cocaine-addiction-treatment" element={<CocaineAddictionTreatment />} />
        <Route path="/fentanyl-addiction-treatment" element={<FentanylAddictionTreatment />} />
        <Route path="/meth-addiction-treatment" element={<MethAddictionTreatment />} />
        <Route path="/prescription-addiction-treatment" element={<PrescriptionAddictionTreatment />} />
        <Route path="/kratom-addiction-treatment" element={<KratomAddictionTreatment />} />
        <Route path="/cannabis-addiction-treatment" element={<CannabisAddictionTreatment />} />
        <Route path="/benzo-addiction-treatment" element={<BenzoAddictionTreatment />} />
        <Route path="/painkiller-addiction-treatment" element={<PainkillerAddictionTreatment />} />
        <Route path="/inhalant-addiction-treatment" element={<InhalantAddictionTreatment />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

{/* Detoxification */}

        <Route path="/alcohol-detoxification" element={<AlcoholDetoxification />} />
        <Route path="/cocaine-detoxification" element={<CocainelDetoxification />} />
        <Route path="/fentanyl-detoxification" element={<FentanylDetoxification />} />
        <Route path="/meth-detoxification" element={<MethDetoxification />} />
        <Route path="/benzo-detoxification" element={<BenzoDetoxification />} />
        <Route path="/medical-detoxification" element={<MedicalDetoxification />} />

{/* Sober Living */}

        <Route path="/sober-living" element={<SoberLiving />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
