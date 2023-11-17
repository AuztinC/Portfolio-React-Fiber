import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useAnimation, useMotionValueEvent, useTransform, animate } from 'framer-motion'
import Skills from './Skills'
import Hero_Content from './Hero_Content'
import AnimatedRoutes from './AnimatedRoutes'
import Socials from './Socials'



function App() {
  const [position, setPoition] = useState('')
  const [enteredWebsite, setEnteredWebsite] = useState(true)
  const hero = useRef()
  const App = useRef()
  const skills = useRef()
  const sectionMargin = useRef(0)
  const sectionPannels = useRef(0)
  const { scrollY } = useScroll()
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start 175px", "end 200px"]
  })
  const scaleImg = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 100,
    restDelta: 0
  })
  const opacity = useTransform(scrollYProgress, [0, .7], [0, 1])

  useMotionValueEvent(scrollY, "change", (latest) =>{
    if(latest >= 500){
        setPoition("fixed")
    } else {
        setPoition("inherit")
    }
    //   console.log("Page scroll: ", latest)
})
  const animationControls = useAnimation()
  useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    // console.log(latest)
    if(latest === 1){
      sectionPannels.current.style.height = '82vh'
    } else {
      
    }
  })
  useMotionValueEvent(scrollY, "change", (latest) =>{
    // console.log(latest)
    if(latest >= 500){
      setEnteredWebsite(true)
    } else {
      setEnteredWebsite(false)
    }
  })
  useEffect(()=>{
    // console.log(loopCont.current)
    if(enteredWebsite){
      animationControls.start({ opacity: 0 }, { duration: 1 })
      sectionMargin.current = 0
    } else {
      animationControls.start({ opacity: 1 }, { duration: 1 })
      sectionMargin.current = 165
    }
  }, [enteredWebsite])
    
      // console.log("Page scroll: ", latest)
  return (
    
  <div className='App' ref={App} style={{height: '100%'}}>

    <section className='hero-section' ref={hero}>
      <Hero_Content />
    </section>
    
    <motion.section className='skills-section' ref={ skills } style={{ position }}>
      <Skills position={ position }/>
    </motion.section> 
    
    <motion.section className='section-pannels' ref={ sectionPannels } style={{marginTop: `${sectionMargin.current}px`, opacity}}>
      <AnimatedRoutes />
    </motion.section>
    <Socials />
  </div>
    
      
  )
}

export default App

import './App.css'