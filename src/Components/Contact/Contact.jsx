import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Footer from '../Footer/Footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset(); 
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>CONTACT</h1>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <input type="text" name="from_name" id="name" required />
          <label htmlFor="name">Your Name</label>
        </div>

        <div className="input-group">
          <input type="email" name="user_email" id="email" required />
          <label htmlFor="email">Email Id</label>
        </div>

        <div className="input-group">
          <textarea id="message" name="message" rows={8} required></textarea>
          <label htmlFor="message">Your Message</label>
        </div>

        <div className="button-submit">
          <button type='submit'>SUBMIT</button>
        </div>
      </form>
       <Footer/>
    </div>
   
  );
};

export default Contact;
