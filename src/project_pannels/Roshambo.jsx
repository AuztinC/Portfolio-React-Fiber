import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

function Roshambo() {
    const roshambo = useRef()
    const video = useRef()
    const [hovered, setHovered] = useState(null)
    const scale = useSpring(1)
    const opacity = useSpring(0, {
        stiffness: 50
    })
    
    useEffect(() => {
      video.current.muted = true
    }, [video])
    
    useEffect(()=>{
        if(hovered){
            scale.set(1.2)
            opacity.set(1)
            video.current.play()
        } else {
            scale.set(1)
            opacity.set(0)
            video.current.pause()
            video.current.currentTime = 0
        }
    }, [hovered])
  return (
    <motion.div className='project' 
        ref={ roshambo } 
        onPointerLeave={()=>setHovered(null)} 
        onPointerEnter={()=>setHovered(roshambo)} 
        style={ { scale } } 
        muted={true}
    >
        {/* <img src="../assets/images/projects/testris/ingame_full.PNG" alt="memember" /> */}
        <video width="320" height="240" ref={ video } muted={true}>
            <source src="../assets/images/projects/roshambo/no-edit.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <motion.div className='project-overlay-bg' style={{ opacity }}>
            <div>
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/RoShamBo' target='_blank'>Repo</a></button>
                {/* <button className='project-overlay-btn'>Deployed</button> */}
                
            </div>
            
            <div>
                <button className='project-overlay-btn'>More Info</button>
                
            </div>
            
            
        </motion.div>
        
    </motion.div>
  )
}

export default Roshambo