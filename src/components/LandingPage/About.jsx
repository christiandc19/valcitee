import React from 'react'; // Import useEffect and useState
import './About.css'; // Import the CSS file
import AboutUs from '../../assets/who-we-are.webp'
import Accent from '../../assets/leaf_orange.png'
import Accent2 from '../../assets/leaf_red.png'


const About = () => {
  
  return (

    <>
    <div className='about-home'>
        <div className="accent-image"><img src={Accent} alt="Leaf" /></div>
    <div className='about-header container'>
      <h1>Mighty Oaks <span>recovery</span> is here to <br />guide you on your path to <span>healing</span>.</h1>
    </div>

    <section className="about-container container">

      <div className="about-image">
        <div className="accent-image2"><img src={Accent2} alt="Leaf" /></div>
        <img src={AboutUs} alt="RisingSun" />
      </div>


      <div className='about-flex-item'>
        <h1>Who We Are</h1>
        <p>Welcome to Mighty Oaks Recovery, a premier luxury rehabilitation center nestled in the heart of San Diego County. Our mission is to provide a serene and supportive environment where individuals can embark on a transformative journey toward recovery and holistic wellness.</p>
        <p>At Mighty Oaks Recovery, we blend evidence-based treatment practices with personalized care to meet the unique needs of each client. Our compassionate team of professionals—comprising licensed therapists, medical experts, and wellness coaches—is dedicated to helping you regain control of your life. We focus on addressing not only the symptoms of addiction but also the underlying causes, fostering sustainable recovery and personal growth.</p>
        <p>Our state-of-the-art facility offers a blend of comfort and tranquility, ensuring you feel at home while working toward a healthier future. From ocean-view therapy sessions to tailored recovery programs, we are committed to guiding you every step of the way with care, dignity, and respect.</p>
        <p>Discover a path to healing that prioritizes your well-being and empowers you to embrace a brighter tomorrow. At Mighty Oaks Recovery, your recovery is our purpose.</p>
      </div>
    </section>
</div>
    </>
  );
};

export default About;
