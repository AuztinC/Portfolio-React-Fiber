import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const PUBLIC_KEY = '0xcK9vC3Ozv5xhxsQ'
  const SERVICE_ID = 'service_cfsd7mv'
  const TEMPLATE_ID = 'template_0gk370e'
const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(`${ SERVICE_ID }`, `${ TEMPLATE_ID }`, form.current, `${ PUBLIC_KEY }`)
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
};

  return (
    <motion.div className='contacts-container' 
    initial={{ x: '100%' }}
    animate={{ x: '0' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h1>What will our next project be!?</h1>
      <h3>Looking forward to hearing from you!</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit" value="Send" >Submit</button>
    </form>

    </motion.div>
  )
}

export default Contact