import React from 'react'
import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_87zawem', 'template_ay0b0il', form.current, 'qnf4LhZmu0VzBvUgX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id='Contact'>
      <div className='contactIntro'>
        <h5>Get in Touch!</h5>
        <h2>Contact</h2>
      </div>


      <div>
        <form ref={form} className='formStyle' onSubmit={sendEmail}>
          <input  classname='inp' type="text" name='name' placeholder='Your Full Name'autoComplete='off' required/>
          <input classname='inp' type="email" name='email' placeholder='Your Email' autoComplete='off' required />
          <input classname='inp' type="message" rows='7' name='name' placeholder='Your Message' autoComplete='off' required />
          <button type='submit' className='submitBtn'>Send Message!</button>
        </form>
      </div>
    </section>
  )
}

export default Contact