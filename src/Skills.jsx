import React, { useEffect, useRef, useState} from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent,useTransform, useAnimate, useAnimation, animationControls, useMotionTemplate } from 'framer-motion'
import InfiniteLooper from './InfiniteLooper'
import { useFrame } from '@react-three/fiber'
import { Link, useLocation } from 'react-router-dom'


const Loop_Container = ({ position })=>{
    
    const animationControls = useAnimation()
    
    useEffect(()=>{
        // console.log(loopCont.current)
        if(position === 'fixed'){
            // navCont.current.style.display = 'flex'
            animationControls.start({ top: '-100%'}, { duration: 1 })
        } else {
            // navCont.current.style.position = 'relative'
            animationControls.start({ top: '0%'}, { duration: 1 })
        }
    }, [position])
    
    return (
    <InfiniteLooper speed="150" direction="left"  > 
        <motion.div className='loop-container' animate={ animationControls }>
            <img className='skills-item' src="../assets/images/logo-express-js.png" alt="express" />
            <img className='skills-item' src="../assets/images/logo-github.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-html-2.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-nodejs.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-react.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-postgreSQL.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-js-2.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-socketio.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-three-js.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-css-2.png" alt="" />
        </motion.div>
    </InfiniteLooper>
        
    )
}

const Nav_Container = ({ position, enteredWebsite, windowSize, Home })=>{
    const location = useLocation()
    const [navCont, animate] = useAnimate()
    
    useEffect(()=>{
        let timer = null
        if(position === 'fixed'){
            animate(navCont.current, { top: '-105%' }, { duration: 1})
            animate(navCont.current, { opacity: 1 }, { duration: 1})
            navCont.current.style.display = 'flex'
            clearTimeout(timer)
        } else {
            navCont.current.style.position = 'relative'
            animate(navCont.current, { top: '15%' }, { duration: 1})
            animate(navCont.current, { opacity: 0 }, { duration: 1})
        }
    }, [position])
    
    // console.log(location.pathname === '/Projects')
    return (
    <motion.div className='nav-container' ref={ navCont }>
        <Link to={'/'} className={`nav-link `} style={{ display: windowSize.width <= 900 ? 'none' : 'inline'}} onClick={ Home }></Link>
        <Link to={'/About'} className={`nav-link ${ location.pathname === '/About' ||  location.pathname === '/' ? 'selected' : ''}`}><span></span>About</Link>
        <Link to={'/Projects'} className={`nav-link ${ location.pathname === '/Projects' ? 'selected' : ''}`}><span></span>Projects</Link>
        <Link to={'/Contact'} className={`nav-link ${ location.pathname === '/Contact' ? 'selected' : ''}`}><span></span>Contact</Link>
    </motion.div>
        
    )
}


export default function Skills({ position, windowSize }) {
    const img = useRef()
    const skills = useRef()
    const { scrollY } = useScroll()
    const { scrollYProgress } = useScroll({
      target: skills,
      offset: ["start 525px", "start 0px"]
    })
    const scaleImg = useSpring(scrollYProgress, {
      stiffness: 400,
      damping: 100,
      restDelta: 0
    })
    const scale = useTransform(scaleImg, [0, .8], [windowSize.width <= 900 ? .9 : 1.2 , windowSize.width <= 900 ? .3 : .5])
    const imgX = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 0 : 10, windowSize.width <= 900 ? 0 : 0])
    const imgY = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 14 : 20, windowSize.width <= 900 ? 12 : 2])
    const opacity = useTransform(scrollYProgress, [.4, 1], [windowSize.width <= 400 ? 1 : 1, windowSize.width <= 400 ? 0 : 1])
    
    const imgXtemplate = useMotionTemplate`${imgX}vw`
    const imgYtemplate = useMotionTemplate`${imgY}vh`
    const [enteredWebsite, setEnteredWebsite] = useState(false)
    
    useEffect(() => {
      if(windowSize <= 900){ 
        img.current.addEventListener('click', Home)
      } else {
        img.current.removeEventListener('click', Home)
      }
    }, [windowSize])
    
    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
        // console.log(latest)
        if(latest === 1){
          setEnteredWebsite(false)
        } else {
          setEnteredWebsite(true)
        }
      })

    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    //   console.log("Page scroll: ", latest)
    })
    function Home(ev){
      ev.preventDefault()
      window.scrollTo(0, 0)
    }
  return (
  <>
  <div className='dummy'>
      {/* <span>Austin Cripe</span> */}
      
        <motion.div className='dummy-image-container'
          ref={img} 
          style={{
              scale,
            //   position,
              left: imgXtemplate,
              top: imgYtemplate,
              opacity
          }}
        >
          {/* <div className='dummy-image-backer' animate={ animationControls }></div> */}
          <div className='dummy-image' ></div>
        </motion.div>
      
    </div>
	<motion.div className='skills-container' ref={ skills } style={{ position }} >

        <Loop_Container position={ position } enteredWebsite={ enteredWebsite } />
        <Nav_Container position={ position } enteredWebsite={ enteredWebsite } windowSize={ windowSize } Home={ Home }/>
        
	</motion.div>
    
  
  </>
  )
}
