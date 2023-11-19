import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
const DEPLOYED_SITE = ''
const REPO = 'https://github.com/AuztinC/RoShamBo'
const imageSrc = [
]
const details = `This project was a blast. A first introduction to both servers and websocket communication, among many other tools such as Nodemon, and Cors. RoShamBo helped me understand server/client relationship and improve my logic building. <br/>
Tools used: HTML, CSS, React, Javascript, Express, Socket.io  <br/>
<a href=${REPO} target='_blank'>Repo</a>  
`
function Roshambo({ setSelectedProject, selectedProject }) {
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
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'roshambo/no-edit.mp4', 
                details, position: [getOffset(roshambo.current).left, getOffset(roshambo.current).top] 
            })
        } else return 
    }
    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }
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
        
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/RoShamBo' target='_blank'>Repo</a></button>
                {/* <button className='project-overlay-btn'>Deployed</button> */}
                
            
            
        
                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
                
            
            
            
        </motion.div>
        
    </motion.div>
  )
}

export default Roshambo