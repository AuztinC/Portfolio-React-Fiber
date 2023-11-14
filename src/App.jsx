import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useAnimation, useMotionValueEvent, useMotionTemplate, useTransform, animate } from 'framer-motion'
import JS_Canvas from './JS_Canvas'
import Skills from './Skills'
// import Nav from './Nav'
import Content from './Content'
import Hero_Content from './Hero_Content'



function App() {
  const hero = useRef()
  const img = useRef()
  const App = useRef()
  const dummyRef = useRef()
  const [enteredWebsite, setEnteredWebsite] = useState(true)
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
  const imgX = useTransform(scrollYProgress, [0, 1], [10, 3])
  const imgY = useTransform(scrollYProgress, [0, 1], [30, 3.5])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const imgXtemplate = useMotionTemplate`${imgX}vw`
  const imgYtemplate = useMotionTemplate`${imgY}vh`
  const position = useTransform(scrollYProgress, (pos)=>{
    return pos === 1 ? "relative" : "relative"
  })
  
  const animationControls = useAnimation()
  useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    // console.log(latest)
    if(latest === 1){
      setEnteredWebsite(false)
    } else {
      setEnteredWebsite(true)
    }
  })
  useEffect(()=>{
    // console.log(loopCont.current)
    if(enteredWebsite){
        animationControls.start({ opacity: 0 }, { duration: 1 })
    } else {
        animationControls.start({ opacity: 1 }, { duration: 1 })
    }
  }, [enteredWebsite])
    
      // console.log("Page scroll: ", latest)
  return (
    
  <div className='App' ref={App} style={{height: '100%'}}>
    <div ref={(dummyRef)} className='dummy'>
      {/* <span>Austin Cripe</span> */}
      
        <motion.div className='dummy-image-container'
          ref={img} 
          style={{
              scale,
              position,
              left: imgXtemplate,
              top: imgYtemplate
          }}
        >
          <div className='dummy-image-backer' animate={ animationControls }></div>
          <div className='dummy-image' ></div>
        </motion.div>
      
    </div>
    
    <section className='hero-section' ref={hero}>
      <Hero_Content />
    </section>
    
    <section className='skills-section'>
      <Skills />
    </section>
    
    <section className='section-pannels'>
      {/* <Content />
      <Content />
      <Content /> */}
      
    </section>
  </div>
    
      
  )
}

export default App

import './App.css'