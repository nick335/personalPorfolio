import { motion } from "framer-motion"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_do94por', 'template_pqz9puo', form.current, 'u7q0_gDohweK0mrTV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <motion.div
        initial={{ opacity:0 }}
        animate = {{ opacity:1, }}
        exit = {{ opacity:0 }}
        
    >
     <section className={`contact ${ props.theme ? 'contact-dark' : 'contact-light'}`}>
        <div className="contact-head">
          <div className="headerDiv">
            <h3><span>04.</span>Let's Connect</h3>
            <div className="line"></div>
          </div> 
          <p>If you would like to send me a message, I can be reached through various platforms! If you prefer email, simply fill out the form below:</p>
        </div>
        <div className="contact-body">
          <div className="contact-body_form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input_div">
                <label htmlFor="user_name">Name</label>
                <input type='text' name="user_name" required/>
              </div>
              <div className="input_div">
                <label htmlFor="user_email">Email</label>
                <input type='text' name="user_email" required/>
              </div>
              <div className="input_div">
                <label htmlFor="">Message</label>
                <textarea name="message" />
              </div>
              <div className="submit_div">
                <input type='submit' value='Send Message' />
              </div>
            </form>
          </div>
          <div className="contact-body_otherOptions">
            <h4>you can also reach out at the following: </h4>
            <ul className="contactInfo_lists">
              <li>Twitter:<a href="https://twitter.com/ChigozieErigo">@ChigozieErigo</a></li>
              <li>GitHub:<a href="https://github.com/nick335">@nick335</a></li>
              <li>Telegram:</li>
              <li>Linkedin:<a href="https://www.linkedin.com/in/chigozie-erigo-435a4a248/">@nicholaserigo</a></li>
            </ul>
          </div>
        </div>
      </section> 
    </motion.div>
    
  )
}