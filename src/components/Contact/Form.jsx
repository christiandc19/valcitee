import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import './Form.css';
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";


import Aetna from '../../assets/aetna.webp';
import Antem from '../../assets/anthem.webp';
import Beacon from '../../assets/beacon.webp';
import Bluecross from '../../assets/bluecross.webp';
import Cigna from '../../assets/cigna.webp';
import Horizon from '../../assets/horizon.png';

const Form = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();

        // Change button text after form submission
        setButtonText("Message Sent");

        // Send the email using EmailJS
        emailjs.sendForm('service_bdfl0ie', 'template_x8gyefc', form.current, 'CLcHWAKSemVMd1_sU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="form">

                    <div className="form_inner">

                        <div className="get_form_inner">

                            <form ref={form} onSubmit={sendEmail}>

                                <div className="form-inputs">

                                <p>Start Your Recovery Today!</p>

                                    <div className="form-input-flex">

                                        <div className="form-input-flex-item">
                                            <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='First Name' 
                                                required 
                                                pattern="[A-Za-z\s]+"
                                                title="Please enter a valid name using only letters." 
                                            /> 
                                        </div>

                                        <div className="form-input-flex-item">
                                                <input 
                                                type="text" 
                                                name='name' 
                                                placeholder='Last Name' 
                                            /> 
                                        </div>

                                    </div>

                                    <br />

                                    <div className="form-input-flex">
                                    
                                    <div className="form-input-flex-item">
                                        <input 
                                            type="email" 
                                            name='email' 
                                            placeholder='Email' 
                                            required 
                                        /> 
                                       </div>

                                       <div className="form-input-flex-item">
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


                                    <div className="form-input-flex-item">

                                    <br />
                                    <input 
                                        type="text" 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required 
                                    /> <br/>
                                    </div>
                                </div>

                                <div className="form-textarea">
                                    <textarea 
                                        name="message" 
                                        placeholder="Message" 
                                        cols="25" 
                                        rows="5" 
                                        required
                                    ></textarea>

                                <div className="disclaimer">
                                        <p>Mighty Oaks Recovery needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our  
                                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                                        <Link to="/privacy-policy"><span> Privacy Policy </span></Link>
                                        </LinkRoll></p>
                                </div>

                                <div className="form-btn">
                                    <input type="submit" value={buttonText} />
                                </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

    );
}

export default Form;
