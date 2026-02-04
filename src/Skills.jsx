import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useAnimate, useAnimation, useMotionTemplate } from 'framer-motion'
import InfiniteLooper from './InfiniteLooper'
import { Link, useLocation } from 'react-router-dom'


const Loop_Container = ({ enteredWebsite })=>{
    
    const animationControls = useAnimation()
    
    useEffect(()=>{
        // console.log(loopCont.current)
        if(enteredWebsite){
            // navCont.current.style.display = 'flex'
            animationControls.start({ top: '-100%'}, { duration: 1 })
        } else {
            // navCont.current.style.position = 'relative'
            animationControls.start({ top: '0%'}, { duration: 1 })
        }
    }, [enteredWebsite])
    
    return (
    <InfiniteLooper speed="150" direction="left"  > 
        <motion.div className='loop-container' animate={ animationControls }>
          <div>
            <img className='skills-item' src="../assets/images/logo/logo-express-js.png" alt="express" />
            <img className='skills-item' src="../assets/images/logo/logo-github.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-html-2.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-nodejs.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-react.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-postgreSQL.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-js-2.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-socketio.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-three-js.png" alt="" />
            <img className='skills-item' src="../assets/images/logo/logo-css-2.png" alt="" />
          </div>
        </motion.div>
    </InfiniteLooper>
        
    )
}

const Nav_Container = ({ enteredWebsite, windowSize, Home })=>{
    const location = useLocation()
    const [navCont, animate] = useAnimate()
    
    useEffect(()=>{
        let timer = null
        if(enteredWebsite){
          // console.log(enteredWebsite)
            animate(navCont.current, { top: '0%' }, { duration: 1})
            animate(navCont.current, { opacity: 1 }, { duration: 1})
            navCont.current.style.display = 'flex'
            clearTimeout(timer)
        } else {
            // navCont.current.style.position = 'relative'
            animate(navCont.current, { top: '110%' }, { duration: 1})
            animate(navCont.current, { opacity: 0 }, { duration: 1})
        }
    }, [enteredWebsite])
    
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


export default function Skills({ enteredWebsite, windowSize }) {
    const img = useRef()
    const skills = useRef()
    const { scrollYProgress } = useScroll({
      target: skills,
      offset: ["start 525px", "start 0px"]
    })
    const scaleImg = useSpring(scrollYProgress, {
      stiffness: 400,
      damping: 100,
      restDelta: 0
    })
    const scale = useTransform(scaleImg, [0, .8], [windowSize.width <= 900 ? .7 : 1.2 , windowSize.width <= 900 ? .3 : .5])
    const imgX = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 5 : 10, windowSize.width <= 900 ? -12 : -2])
    const imgY = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 16 : 20, windowSize.width <= 900 ? 12 : 2])
    const opacity = useTransform(scrollYProgress, [.4, 1], [windowSize.width <= 400 ? 1 : 1, windowSize.width <= 400 ? 0 : 1])
    
    const imgXtemplate = useMotionTemplate`${imgX}vw`
    const imgYtemplate = useMotionTemplate`${imgY}vh`
    // const [enteredWebsite, setEnteredWebsite] = useState(false)
    
    useEffect(() => {
      if(windowSize <= 900){ 
        img.current.addEventListener('click', Home)
      } else {
        img.current.removeEventListener('click', Home)
      }
    }, [windowSize])
    

    function Home(ev){
      ev.preventDefault()
      window.scrollTo(0, 0)
    }
  return (
  <>
  <div className='dummy'>
      <motion.div className='dummy-image' ref={img} 
      style={{
          scale,
          left: imgXtemplate,
          top: imgYtemplate,
          opacity
      }}></motion.div>
      
    </div>
	<motion.div className='skills-container' ref={ skills }  >

        <Loop_Container  enteredWebsite={ enteredWebsite } />
        <Nav_Container  enteredWebsite={ enteredWebsite } windowSize={ windowSize } Home={ Home }/>
        
	</motion.div>
    
  
  </>
  )
}
