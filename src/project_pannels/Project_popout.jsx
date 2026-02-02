import React, { useRef, useEffect } from 'react'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ExitSvg from '../../public/assets/images/ExitSvg'

function Project_popout({ selectedProject, setSelectedProject, exitProject }) {
    const { images, video, details } = selectedProject
    const popout = useRef()
    const detailsRef = useRef()
    const videoRef = useRef()
    const topY = useSpring(-100, {
        stiffness: 300,
        damping: 100
    })
    const topTemplate = useMotionTemplate`${topY}%`
    useEffect(()=>{
        if(!selectedProject && exitProject){
            closeWindow()
        } else {
            topY.set(50)
            videoRef.current.play()
        }
    }, [selectedProject, exitProject])
    
    useEffect(()=>{
        detailsRef.current.innerHTML = details
    }, [detailsRef])
    
    
    function closeWindow() {
        topY.set(-100)
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setTimeout(()=>setSelectedProject(null), 300)
    }
    
    
    if(!images){
        return null
    }
  return (
    <motion.div className='project-popout' ref={ popout } style={{top: topTemplate}}>
        <button className='exit-SVG' type='button' onClick={ closeWindow } aria-label='Close'>
            <ExitSvg />
        </button>
        <Carousel className='popout-carousel' showThumbs={false} dynamicHeight>
            
                <video muted={true} controls ref={ videoRef }>
                    <source src={`../assets/images/projects/${ video }`} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {
                    images.map((img, i)=>{
                        // console.log(img)
                        return (
                            <div key={ i } style={{height: 'fit-content'}}>
                                <img src={img} key={ i }/>
                                
                            </div>
                        )
                    })
                    // <img src="../assets/images/projects/testris/ingame_full.PNG"/>
                }
            
            
        </Carousel>
        { details ? 
            <p ref={ detailsRef }>
            </p>
        : null
        }
        <a className='popout-close' onClick={ closeWindow }>Close</a>
    </motion.div> 
  )
}

export default Project_popout