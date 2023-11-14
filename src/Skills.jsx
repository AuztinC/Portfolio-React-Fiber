import React, { useEffect, useRef, useState} from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent,useTransform, useAnimate, useAnimation, animationControls } from 'framer-motion'
import InfiniteLooper from './InfiniteLooper'
import { useFrame } from '@react-three/fiber'

const logoImages = [
<img className='skills-item' src="../assets/images/logo-express-js.png" alt="express" />,
<img className='skills-item' src="../assets/images/logo-github.png" alt="" />,
<img className='skills-item' src="../assets/images/logo-nodejs.png" alt="" />,
<img className='skills-item' src="../assets/images/logo-postgreSQL.png" alt="" />,
<img className='skills-item' src="../assets/images/logo-socketio.png" alt="" />,
<img className='skills-item' src="../assets/images/logo-three-js.png" alt="" />,
{/* <img className='skills-item' src="../assets/images/logo" alt="" />
<img className='skills-item' src="../assets/images/logo" alt="" />
<img className='skills-item' src="../assets/images/logo" alt="" /> */}
]


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
            <img className='skills-item' src="../assets/images/logo-nodejs.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-postgreSQL.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-socketio.png" alt="" />
            <img className='skills-item' src="../assets/images/logo-three-js.png" alt="" />
        </motion.div>
    </InfiniteLooper>
        
    )
}

const Nav_Container = ({ position })=>{
    const [navCont, animate] = useAnimate()
    useEffect(()=>{
        if(position === 'fixed'){
            // navCont.current.style.display = 'flex'
            animate(navCont.current, { top: '-100%' }, { duration: 1})
            animate(navCont.current, { opacity: 1 }, { duration: 1})
        } else {
            navCont.current.style.position = 'relative'
            animate(navCont.current, { top: '0%' }, { duration: 1})
            animate(navCont.current, { opacity: 0 }, { duration: 1})
        }
    }, [position])
    
    return (
    <motion.div className='nav-container' ref={ navCont }>
        <div></div>
        <div>Projects</div>
        <div>Contact</div>
        <div>About</div>
    </motion.div>
        
    )
}


export default function Skills() {
    const skills = useRef()
    const loopCont = useRef()

    const [position, setPoition] = useState('')
    const { scrollY } = useScroll()
    const { scrollYProgress } = useScroll({
        target: skills,
        offset: ["start 575px", "start 0px"]
    })
    
    useMotionValueEvent(scrollY, "change", (latest) =>{
        if(latest >= 500){
            setPoition("fixed")
        } else {
            setPoition("inherit")
        }
        //   console.log("Page scroll: ", latest)
    })
    useMotionValueEvent(scrollYProgress, "change", (latest) =>{
    //   console.log("Page scroll: ", latest)
    })
    // useEffect(()=>{
    //     if(position === 'fixed'){
    //         // navCont.current.style.display = 'flex'
    //         animate(navCont.current, { top: '0%' }, { duration: 1})
    //         animate(loopCont.current, { top: '100%' }, { duration: 1})
    //     } else {
    //         navCont.current.style.position = 'relative'
    //         animate(navCont.current, { top: '100%' }, { duration: 1})
    //     }
    // }, [position])
    
  return (
  <>
	<motion.div className='skills-container' ref={ skills } style={{ position }} >
        {/* <InfiniteLooper speed="150" direction="left"  > 
            <motion.div className='loop-container' ref={ loopCont }>
                <img className='skills-item' src="../assets/images/logo-express-js.png" alt="express" />
                <img className='skills-item' src="../assets/images/logo-github.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-nodejs.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-postgreSQL.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-socketio.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-three-js.png" alt="" />
            </motion.div>
        </InfiniteLooper> */}
        <Loop_Container position={ position } />
        <Nav_Container position={ position } />
        
	</motion.div>
    
  
  </>
  )
}
