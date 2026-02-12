import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useAnimate, useAnimation, useMotionTemplate } from 'framer-motion'
import InfiniteLooper from './InfiniteLooper'
import { Link, useLocation } from 'react-router-dom'
import Nav_Container from './Nav'


const Loop_Container = ({ enteredWebsite }) => {

  const animationControls = useAnimation()

  useEffect(() => {
    if (enteredWebsite) {
      animationControls.start({ top: '-100%' }, { duration: 1 })
    } else {
      animationControls.start({ top: '0%' }, { duration: 1 })
    }
  }, [enteredWebsite])

  return (
    <InfiniteLooper speed="150" direction="left"  >
      <motion.div className='loop-container' animate={animationControls}>
        <div>
          <img className='skills-item' src="../assets/images/logo/logo-github.png" alt="" />
          {/* <img className='skills-item' src="../assets/images/logo/logo-html-2.png" alt="" /> */}
          <img className='skills-item' src="../assets/images/logo/java-logo.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/clojure-logo.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/docker-logo.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-nodejs.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/redis-logo.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-react.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/aws-logo.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-express-js.png" alt="express" />
          <img className='skills-item' src="../assets/images/logo/logo-postgreSQL.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-js-2.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-socketio.png" alt="" />
          <img className='skills-item' src="../assets/images/logo/logo-three-js.png" alt="" />
          {/* <img className='skills-item' src="../assets/images/logo/logo-css-2.png" alt="" /> */}
        </div>
      </motion.div>
    </InfiniteLooper>

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
  const scale = useTransform(scaleImg, [0, .8], [windowSize.width <= 900 ? .7 : 1.2, windowSize.width <= 900 ? .3 : .5])
  const imgX = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 5 : 10, windowSize.width <= 900 ? -12 : -2])
  const imgY = useTransform(scrollYProgress, [0, 1], [windowSize.width <= 900 ? 16 : 20, windowSize.width <= 900 ? 12 : 2])
  const opacity = useTransform(scrollYProgress, [.4, 1], [windowSize.width <= 400 ? 1 : 1, windowSize.width <= 400 ? 0 : 1])

  const imgXtemplate = useMotionTemplate`${imgX}vw`
  const imgYtemplate = useMotionTemplate`${imgY}vh`

  useEffect(() => {
    if (windowSize <= 900) {
      img.current.addEventListener('click', Home)
    } else {
      img.current.removeEventListener('click', Home)
    }
  }, [windowSize])

  function Home(ev) {
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
      <motion.div className='skills-container' ref={skills}  >
        <Loop_Container enteredWebsite={enteredWebsite} />
        <Nav_Container enteredWebsite={enteredWebsite} windowSize={windowSize} Home={Home} />
      </motion.div>
    </>
  )
}
