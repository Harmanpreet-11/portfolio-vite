    import React, { useRef } from 'react';
    import emailjs from '@emailjs/browser';

    function ContactForm() {
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
            form.current.reset(); // Clear the form after success
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
        });
      };

      return (
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      );
    }

    export default ContactForm;