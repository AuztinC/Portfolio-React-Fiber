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
    <motion.div className='blog-container' 
    initial={{ x: '-100%' }}
    animate={{ x: '0' }}
    exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
    >
      <iframe className='blog-iframe' src="https://austincripe-blog.netlify.app/featured" title="Blog" frameBorder="0"></iframe>
    </motion.div>
    
  )
}

export default Blog