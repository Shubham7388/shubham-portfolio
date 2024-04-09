import React, { useRef } from 'react'
import './contact.css'
import walmartImg from '../../assets/walmart.png'
import microsoftImg from '../../assets/microsoft.png'
import adobeImg from '../../assets/adobe.png'
import faceImg from '../../assets/facebook.png'
import instaIcon from '../../assets/instagram.png'
import facebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import youTubeIcon from '../../assets/youtube.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_7w6p6xt', 'template_el72jpk', form.current, {
            publicKey: '1v-BBb5KPUERyMP9K',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('email sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
        <section id="contactpage">
            <div id="clients">
                <h1 className="contactTitle">My Clients</h1>
                <p className="clientDesc">I had the oppartunity to work with a diverse group of companies some of notable comapnies I have worked with include Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, explicabo.
                </p>
                <div className="clientImgs">
                    <img src={walmartImg} alt="Client" className="clientImg" />
                    <img src={microsoftImg} alt="Client" className="clientImg" />
                    <img src={adobeImg} alt="Client" className="clientImg" />
                    <img src={faceImg} alt="Client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactHeading">
                    Contact Me
                </h1>
                <span className="contactDesc">
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>

                    <div className="links">
                        <img src={facebookIcon} alt="faceBook" className="link" />
                        <img src={instaIcon} alt="Instagram" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youTubeIcon} alt="YouTube" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;