import HeroCanvas from './HeroCanvas'
// import Nav from './Nav'
import Content from './Content'
import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent, useMotionTemplate, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'


function App() {
  const hero = useRef()
  const img = useRef()
  const App = useRef()
  const navRef = useRef()
  const [hidden, setHidden] = useState()
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start 175px", "end 200px"]
  })
  const scaleImg = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 100,
    restDelta: 0
  })
  
  const scale = useTransform(scaleImg, [0, 1], [1.2, .5])
  const imgX = useTransform(scrollYProgress, [0, 1], [10, 0])
  const imgY = useTransform(scrollYProgress, [0, 1], [30, 2])
  const imgXtemplate = useMotionTemplate`${imgX}vw`
  const imgYtemplate = useMotionTemplate`${imgY}vh`
  const position = useTransform(scrollYProgress, (pos)=>{
    return pos === 0 ? "relative" : "relative"
  })
  
  useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    if(latest === 1){
      setHidden(false)
    } else {
      setHidden(true)
    }
    
      // console.log("Page scroll: ", latest)
  })
  return (
    
  <div className='App' ref={App} style={{height: '100%'}}>
    <div ref={(navRef)} className='nav'>
      {/* <span>Austin Cripe</span> */}
      
        <motion.div className='nav-image-container'
          ref={img} 
          style={{
              scale,
              position,
              left: imgXtemplate,
              top: imgYtemplate
          }}
        >
          <div className='nav-image-backer' hidden={hidden}></div>
          <div className='nav-image' ></div>
        </motion.div>
      
      <ul>
          {/* <li><animated.div className='animated-nav' /></li> */}
          <li>nav</li>
          <li>nav</li>
          <li>nav</li>
          
      </ul>
    </div>
    
    <section className='hero-section' ref={hero}>
      <HeroCanvas />
    </section>
    
    <Content />
    <Content />
    <Content />
  </div>
    
      
  )
}

export default App

import './App.css'