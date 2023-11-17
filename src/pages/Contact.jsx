import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [result, setResult] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const form = useRef();
  const PUBLIC_KEY = '0xcK9vC3Ozv5xhxsQ'
  const SERVICE_ID = 'service_cfsd7mv'
  const TEMPLATE_ID = 'template_0gk370e'
const sendEmail = (e) => {
e.preventDefault();

const notify = (props) => toast(props)

emailjs.sendForm(`${ SERVICE_ID }`, `${ TEMPLATE_ID }`, form.current, `${ PUBLIC_KEY }`)
  .then((result) => {
    setResult(`Message Sent`);
    toast.success('Message Sent', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, (error) => {
    console.log(error.text);
    toast.success(`Oh no, ${error.text}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });
  setMessage('')
  setName('')
  setEmail('')
};

  return (
    <motion.div className='contacts-container' 
    initial={{ x: '100%' }}
    animate={{ x: '0' }}
    exit={{ x: window.innerHeight, transition: { duration: 0.1 } }}
    >
      <h1>What will our next project be!?</h1>
      <h3>I look forward to hearing from you!</h3>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required value={name} onChange={(ev)=>setName(ev.target.value)}/>
      <label>Email</label>
      <input type="email" name="user_email" required value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
      <label>Message</label>
      <textarea name="message" required value={message} onChange={(ev)=>setMessage(ev.target.value)}/>
      <button type="submit" value="Send" disabled={ !message || !name || !email ? true : false}>Submit</button>
    </form>
    {/* { result ? result : null} */}
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </motion.div>
  )
}

export default Contact