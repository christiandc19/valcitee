import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import Aetna from '../../assets/aetna.webp';
import Antem from '../../assets/anthem.webp';
import Beacon from '../../assets/beacon.webp';
import Bluecross from '../../assets/bluecross.webp';
import Cigna from '../../assets/cigna.webp';
import Horizon from '../../assets/horizon.png';

const ContactForm = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        // Change button text after form submission
        setButtonText("Message Sent");

        // Send the email using EmailJS
        emailjs.sendForm('service_bdfl0ie', 'template_2470gbb', form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="contactForm">

                <div className="contact-content container">

                    <div className="form-insurance">
                        <div className="form-insurance-header">
                            <h1>WE WORK WITH MAJOR INSURANCE</h1>
                            <p>Contact us to verify your insurance coverage.</p>
                        </div>
                        <div className="insurance-thumbnail">
                            <img src={Aetna} alt="Aetna Insurance" loading="lazy"/>
                        </div>

                        <div className="insurance-thumbnail">
                            <img src={Antem} alt="Antem Insurance" loading="lazy"/>
                        </div>

                        <div className="insurance-thumbnail">
                            <img src={Beacon} alt="Beacon Insurance" loading="lazy"/>
                        </div>

                        <div className="insurance-thumbnail">
                            <img src={Bluecross} alt="Bluecross Insurance" loading="lazy"/>
                        </div>

                        <div className="insurance-thumbnail">
                            <img src={Cigna} alt="Cigna Insurance" loading="lazy"/>
                        </div>

                        <div className="insurance-thumbnail">
                            <img src={Horizon} alt="Horizon Insurance" loading="lazy"/>
                        </div>

                    </div>

                    <div className="footer_get_touch_inner">

                        <div className="get_form_inner">

                            <form ref={form} onSubmit={sendEmail}>

                                <div className="inputs">

                                <h1>Start Your Recovery Today</h1>
                                <p>We'll keep your contact information strictly confidential.</p>

                                    <div className="input-flex">

                                        <div className="input-flex-item">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='First Name' 
                                                required 
                                                pattern="[A-Za-z\s]+"
                                                title="Please enter a valid name using only letters." 
                                            /> 
                                        </div>

                                        <div className="input-flex-item">
                                            <label>Last Name</label>
                                                <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='Last Name (optional)' 
                                            /> 
                                        </div>

                                    </div>

                                    <br />

                                    <div className="input-flex">
                                    
                                    <div className="input-flex-item">
                                    <label>Email</label>
                                        <input 
                                            type="email" 
                                            name='email' 
                                            placeholder='Email' 
                                            required 
                                        /> 
                                       </div>

                                       <div className="input-flex-item">
                                       <label>Phone</label>
                                        <input 
                                            type="tel" 
                                            name='phone' 
                                            placeholder='Phone' 
                                            pattern="[0-9]*" 
                                            maxLength="15" 
                                            required 
                                            title="Please enter a valid phone number." 
                                        /> 
                                        </div>
                                    </div>



                                    <br />
                                    <label>Subject</label>
                                    <input 
                                        type="text" 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required 
                                    /> <br/>
                                </div>
                                <div>
                                    <label>Message</label>

                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        cols="30" 
                                        rows="10" 
                                        required
                                    ></textarea>

                            <div className="disclaimer">
                              <p>Mighty Oaks Recovery needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                  <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                              </LinkRoll></p>
                            </div>


                                    <input type="submit" value={buttonText} />
                                </div>
                            </form>
                        </div>
                    </div>




                </div>

                    <div className="form-map">
                        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4100%20Moorepark%20Ave,%20Suite%20124%20San%20Jose,%20CA%2095117+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe>
                    </div>










        </div>
    );
}

export default ContactForm;
