import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.div style={{height: '100%'}} 
    initial={{ x: 0 }}
    animate={{ x: '100%' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
        Projects
    </motion.div>
  )
}

export default Contact