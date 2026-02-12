import React, { useEffect, useRef } from 'react'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'

function Blog() {
  const handshake = useRef()
  const shaker = useSpring(0)
  const shakerXtemplate = useMotionTemplate`${shaker}px`
  useEffect(()=>{
    if(handshake.current !== undefined){
      const handshakeTimer = setInterval(()=>{
        shaker.set(5)
        setTimeout(()=>shaker.set(0), 200)
      }, 3000)
    }
  }, [handshake])
  return (
    <motion.div className='about-container' 
    initial={{ x: '-100%' }}
    animate={{ x: '0' }}
    exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div>
        <h1>Hello, I'm Austin Cripe <motion.span ref={ handshake } style={{position: 'relative', left: shakerXtemplate}}>🖐</motion.span></h1>
        <h2>Full-Stack Software Engineer</h2>
        <h2>I enjoy making interactive and unique experiences for users</h2>
        <h2>Professional Audio Engineer and Former Poker Dealer</h2>
        <h3>When I'm not developing a project, I keep myself busy by:</h3>
        <h4>Spending time with my cat, Jaws😸 </h4>
        <h4>Playing video games with friends 🎮</h4>
        <h4>Bicycling to stay active 🚴‍♂️</h4>
      </div>

    </motion.div>
    
  )
}

export default Blog