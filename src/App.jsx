import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useAnimation, useMotionValueEvent, useTransform, animate } from 'framer-motion'
import Skills from './Skills'
import Hero_Content from './Hero_Content'
import AnimatedRoutes from './AnimatedRoutes'
import Socials from './Socials'
import './App.css'
import Nod_Modes from './Nod_Modes'
import DownArrow from '../public/assets/obj/DownArrow'


function App() {
  const [position, setPoition] = useState('')
  const [enteredWebsite, setEnteredWebsite] = useState(false)
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
  const [btnHovered, setBtnHovered] = useState(false)
  const [btnTimerId, setBtnTimerId] = useState(null)
  const hero = useRef()
  const App = useRef()
  const skills = useRef()
  const sectionMargin = useRef(0)
  const sectionPannels = useRef(0)
  const scrollDownBtn = useRef()
  
  const { scrollY } = useScroll()
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"]
  })
  const scaleImg = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 100,
    restDelta: 0
  })
  const opacity = useTransform(scrollYProgress, [0, .7], [0, 1])
  const scale = useSpring(1)
  // const scaleWindow = useTransform(scaleImg, [0, 1], )
  
  useEffect(()=>{
    window.addEventListener('resize', (event)=>handleResize(event))
    if(window.innerWidth <= 750){
        // projectOverlay.current.style.pointerEvents = 'none'
        setWindowSize({width: window.innerWidth, height: window.innerHeight})
    }
    return(window.removeEventListener('resize', handleResize))
  }, [])
  
  function handleResize(event){
    // console.log(event.target.innerWidth)
    setWindowSize({width: event.target.innerWidth, height: event.target.innerHeight})
  }
  
  useEffect(() => {
    if(btnHovered){
      scale.set(1.2)
    } else {
      scale.set(1)
      
    }
  
  }, [btnHovered])
  
  
  
//   useMotionValueEvent(scrollY, "change", (latest) =>{
//     console.log(latest)
//     if(latest >= 750){
//         setPoition("fixed")
//     } else {
//         setPoition("inherit")
//     }
//       console.log("Page scroll: ", latest)
// })
  const animationControls = useAnimation()
  useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    // console.log(latest)
    if(latest >= 0.95){
        // setPoition("fixed")
        setEnteredWebsite(true)
        scrollDownBtn.current.style.opacity = "0"
        scrollDownBtn.current.style.animation = "none"
        sectionPannels.current.style.height = '100vh'
        setBtnTimerId(null)
      } else {
        setBtnTimerId(1)
        setEnteredWebsite(false)
      
    }
  })
  // useMotionValueEvent(scrollY, "change", (latest) =>{
  //   console.log(latest)
  //   if(latest >= 750){
  //     setEnteredWebsite(true)
  //   } else {
  //     setEnteredWebsite(false)
  //   }
  // })
  useEffect(()=>{
    // console.log(loopCont.current)
    if(enteredWebsite){
      animationControls.start({ opacity: 0 }, { duration: 1 })
      sectionMargin.current = 0
    } else {
      animationControls.start({ opacity: 1 }, { duration: 1 })
      sectionMargin.current = 0
    }
  }, [enteredWebsite])
  
  useEffect(()=>{
    if(btnTimerId > 0 && !enteredWebsite){
      if(btnTimerId >= 500){
        scrollDownBtn.current.style.animation = "downArrow 2s alternate infinite cubic-bezier(0.755, 0.05, 0.855, 0.06)"
        setBtnTimerId(0)
      } else {
        
        setBtnTimerId(btnTimerId + 1)
      }
    }
  }, [btnTimerId])
  
  
  function handleScrollDown(click){
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }
    
      // console.log("Page scroll: ", latest)
  return (
    
  <div className='App' ref={App} style={{height: '100%'}}>
    <motion.button className='scroll-down-btn'
    onPointerLeave={()=>setBtnHovered(false)} 
    onPointerEnter={()=>setBtnHovered(true)} 
    style={ { scale } } 
    onClick={handleScrollDown} ref={scrollDownBtn}
    >
      <DownArrow />
    </motion.button>
    <section className='hero-section' ref={hero}>
    {/* <div className='hero-canvas'> */}
		  <Nod_Modes windowSize={ windowSize }/>
      
	  {/* </div>	 */}
      {/* <Hero_Content  windowSize={ windowSize }/> */}
    </section>
    
    <motion.section className='skills-section' ref={ skills } style={{ position }}>
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


