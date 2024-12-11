import React from 'react'
import { Link } from 'react-router-dom';
// import { Link as LinkRoll } from "react-scroll";

import Alcohol from '../../assets/addiction-alcohol.webp'
import Cocaine from '../../assets/addiction-cocaine.webp'
import Fentanyl from '../../assets/addiction-fentanyl.webp'
import Meth from '../../assets/addiction-meth.webp'
import Prescriptions from '../../assets/addiction-prescriptions.webp'
import Kratom from '../../assets/addiction-kratom.webp'
import Canabis from '../../assets/addiction-canabis.webp'
import Benzo from '../../assets/addiction-benzo.webp'
import './Offer.css'

const Offer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smoothly scroll to the top
      };

  return (
    <div className='offer'>
        <div className='offerContent'>
            <div className='offerHeader'>
                <h1>What We Treat</h1>
                <hr />
            </div>

            <div className='offerFlex'>

                <div className='offerFlexItem container'>
                    <div className='iconFlexItem'>
                        <div className='iconFlex' onClick={scrollToTop}>
                            <Link to="/alcoholism">                                
                                <div className='iconText'>
                                    <div className='offerImg'>
                                        <img src={Alcohol} alt='Alcohol Addiction' loading='lazy'/>
                                    </div>
                                    <h2>Alcohol Addiction</h2>
                                    <p>We offers a comprehensive Alcohol Addiction Program focused on personalized care and long-term recovery.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                

                    <div className='iconFlexItem'>
                        <div className='iconFlex'>
                        <Link to="/cocaine-addiction-treatment">
                            <div className='iconText' onClick={scrollToTop}>
                                    <div className='offerImg'>
                                        <img src={Cocaine} alt='Cocaine' loading='lazy'/>
                                    </div>
                                    <h2>Cocaine Addiction</h2>
                                    <p>Our Cocaine Addiction Program provides comprehensive care to help individuals achieve lasting recovery through evidence-based treatment and personalized support.</p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className='iconFlexItem'>
                        <div className='iconFlex '>
                            <Link to="/fentanyl-addiction-treatment">
                               <div className='iconText' onClick={scrollToTop}>
                                    <div className='offerImg'>
                                            <img src={Fentanyl} alt='Fentanyl Addiction' loading='lazy'/>
                                        </div>
                                    <h2>Fentanyl Addiction</h2>
                                    <p>Our Fentanyl Addiction Program provides comprehensive, evidence-based treatment to help individuals overcome dependency and reclaim their lives with compassion and support.</p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div className='iconFlexItem'>
                        <div className='iconFlex'>
                            <Link to="/meth-addiction-treatment">
                                <div className='iconText' onClick={scrollToTop}>
                                    <div className='offerImg'>
                                        <img src={Meth} alt='Meth Addiction' loading='lazy'/>
                                    </div>
                                    <h2>Meth Addiction</h2>
                                    <p>Our Meth Addiction Program offers compassionate, evidence-based care to help individuals overcome dependence and reclaim their lives.</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>


                <div className='offerFlex'>

                    <div className='offerFlexItem container'>
                        <div className='iconFlexItem'>
                            <div className='iconFlex' onClick={scrollToTop}>
                                <Link to="/prescription-addiction-treatment">
                                    <div className='iconText'>
                                        <div className='offerImg'>
                                            <img src={Prescriptions} alt='Prescriptions Addiction' loading='lazy'/>
                                        </div>
                                        <h2>Prescriptions Addiction</h2>
                                        <p>Our Prescriptions Addiction program provides comprehensive, evidence-based care to help individuals safely overcome dependency and regain control of their lives.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className='iconFlexItem'>
                            <div className='iconFlex'>
                                <Link to="/kratom-addiction-treatment">
                                    <div className='iconText' onClick={scrollToTop}>
                                        <div className='offerImg'>
                                            <img src={Kratom} alt='Kratom Addiction' loading='lazy'/>
                                        </div>
                                        <h2>Kratom Addiction</h2>
                                        <p>Our Kratom Addiction Program provides compassionate, evidence-based treatment to help individuals regain control and achieve lasting recovery.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className='iconFlexItem'>
                            <div className='iconFlex '>
                                <Link to="/cannabis-addiction-treatment">
                                    <div className='iconText' onClick={scrollToTop}>
                                        <div className='offerImg'>
                                                <img src={Canabis} alt='Canabis Addiction' loading='lazy'/>
                                            </div>
                                        <h2>Cannabis Addiction</h2>
                                        <p>Our Cannabis Addiction Program provides personalized treatment to help individuals overcome dependency and regain control of their lives.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>


                        <div className='iconFlexItem'>
                            <div className='iconFlex'>
                                <Link to="/benzo-addiction-treatment">
                                    <div className='iconText' onClick={scrollToTop}>
                                        <div className='offerImg'>
                                            <img src={Benzo} alt='Benzo Addiction' loading='lazy'/>
                                        </div>
                                        <h2>Benzo Addiction</h2>
                                        <p>Our Benzo Addiction Program provides personalized, evidence-based treatment to help individuals safely overcome dependence on benzodiazepines and achieve lasting recovery.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>


                        
            </div>












            </div>

        </div>
      
    </div>
  )
}

export default Offer
