import React, { useRef, useState} from 'react'
import { motion, useScroll, useSpring, useMotionValue, useMotionValueEvent, useMotionTemplate, useTransform } from 'framer-motion'
import InfiniteLooper from './InfiniteLooper'
// react
// node //
// javascript // /
// html //
// css //
// express
// three //
// sql //
// postgres //

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

export default function Skills() {
    const skills = useRef()
    const [position, setPoition] = useState('')
    const { scrollY } = useScroll()
    const { scrollYProgress } = useScroll({
        target: skills,
        offset: ["start 575px", "start 0px"]
    })
    // const position = useTransform(scrollYProgress, (pos)=>{
        //   return pos === 1 ? "fixed" : "inherit";
        // })
    const loop_opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const nav_opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    useMotionValueEvent(scrollY, "change", (latest) =>{
    if(latest >= 500){
        setPoition("fixed")
    } else {
        setPoition("inherit")
    }
    //   console.log("Page scroll: ", latest)
    })
  return (
  <>
	<motion.div className='skills-container' ref={ skills } style={{ position }}>
        <motion.div style={{ opactiy: 0}}>
            <InfiniteLooper speed="150" direction="left" > 
                <img className='skills-item' src="../assets/images/logo-express-js.png" alt="express" />
                <img className='skills-item' src="../assets/images/logo-github.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-nodejs.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-postgreSQL.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-socketio.png" alt="" />
                <img className='skills-item' src="../assets/images/logo-three-js.png" alt="" />
            </InfiniteLooper>
        </motion.div>
            
        <motion.div className='nav-container' style={{ opacity: nav_opacity }}>
            <div>Projects</div>
            <div>Contact</div>
            <div>About</div>
        </motion.div>
        
	</motion.div>
    
  
  </>
  )
}
