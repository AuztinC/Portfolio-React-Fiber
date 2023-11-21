import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Project_popout({ selectedProject, setSelectedProject }) {
    const { images, video, details, position } = selectedProject
    // console.log(position)
    const popout = useRef()
    const detailsRef = useRef()
    const videoRef = useRef()
    const topY = useSpring(-100, {
        stiffness: 300,
        damping: 100
    })
    const topTemplate = useMotionTemplate`${topY}%`
    useEffect(()=>{
        if(!selectedProject){
            topY.set(-100)
        } else {
            topY.set(50)
            videoRef.current.play()
        }
    }, [selectedProject])
    
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
    // style={{ left: `${position[0]}px`, top: `${position[1]}px`}}
  return (
    <motion.div className='project-popout' ref={ popout } style={{top: topTemplate}}>
        <Carousel className='popout-carousel' showThumbs={false} dynamicHeight>
            
                <video muted={true} controls ref={ videoRef } loop>
                    <source src={`../assets/images/projects/${ video }`} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {
                    images.map((img, i)=>{
                        // console.log(img)
                        return (
                            <div key={ i } style={{maxHeight: '320px'}}>
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