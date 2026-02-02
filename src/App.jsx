import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useAnimation, useMotionValueEvent, useTransform } from 'framer-motion'
import Skills from './Skills'
import AnimatedRoutes from './AnimatedRoutes'
import Socials from './Socials'
import './App.css'
import Nod_Modes from './Nod_Modes'
import DownArrow from '../public/assets/obj/DownArrow'


function App() {
  const [enteredWebsite, setEnteredWebsite] = useState(false)
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
  const [btnHovered, setBtnHovered] = useState(false)
  const hero = useRef()
  const skills = useRef()
  const sectionMargin = useRef(0)
  const sectionPannels = useRef(0)
  const scrollDownBtn = useRef()

  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"]
  })
  const opacity = useTransform(scrollYProgress, [0, .7], [0, 1])
  const scale = useSpring(1)
  
  useEffect(()=>{
    window.addEventListener('resize', (event)=>handleResize(event))
    if(window.innerWidth <= 750){
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    }
    return(window.removeEventListener('resize', handleResize))
  }, [])
  
  function handleResize(event){
    setWindowSize({width: event.target.innerWidth, height: event.target.innerHeight})
  }

  function hideScrollDownBtn(){
    scrollDownBtn.current.style.opacity = "0"
    scrollDownBtn.current.style.animation = "none"
  }
  
  useEffect(() => {
    if(btnHovered){
      scale.set(1.2)
    } else {
      scale.set(1)
    }
  }, [btnHovered])
  
  const animationControls = useAnimation()
  useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    if(latest >= 0.95){
        setEnteredWebsite(true)
        hideScrollDownBtn()
        sectionPannels.current.style.height = '100vh'
      } else {
        setEnteredWebsite(false)
    }
  })

  useEffect(()=>{
    if(enteredWebsite){
      animationControls.start({ opacity: 0 }, { duration: 1 })
      sectionMargin.current = 0
      hideScrollDownBtn()
    } else {
      scrollDownBtn.current.style.animation = "downArrow 2s alternate infinite cubic-bezier(0.755, 0.05, 0.855, 0.06)"
      animationControls.start({ opacity: 1 }, { duration: 1 })
      sectionMargin.current = 0
    }
  }, [enteredWebsite])
  
  function handleScrollDown(click){
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
    
  return (
    
  <div className='App' style={{height: '100%'}}>
    <motion.div className='personal-info-banner'>
      <span> Austin R Cripe | 904-469-1213 | <a href="mailto:austincripe.business@gmail.com">austincripe.business@gmail.com</a></span>
    </motion.div>
    <motion.button className='scroll-down-btn'
    onPointerLeave={()=>setBtnHovered(false)} 
    onPointerEnter={()=>setBtnHovered(true)} 
    style={ { scale } } 
    onClick={handleScrollDown} ref={scrollDownBtn}
    >
      <DownArrow />
    </motion.button>
    <section className='hero-section' ref={hero}>
		  <Nod_Modes windowSize={ windowSize }/>
    </section>
    
    <motion.section className='skills-section' ref={ skills } >
      <Skills enteredWebsite={ enteredWebsite } windowSize={ windowSize }/>
    </motion.section> 
    
    <motion.section className='section-pannels' ref={ sectionPannels } style={{marginTop: `${sectionMargin.current}vh`, opacity}}>
      <AnimatedRoutes  windowSize={ windowSize }/>
    </motion.section>
    <Socials  windowSize={ windowSize }/>
  </div>
    
      
  )
}

export default App


