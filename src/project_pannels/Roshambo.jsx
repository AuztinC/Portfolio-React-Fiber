import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
const REPO = 'https://github.com/AuztinC/RoShamBo'
const imageSrc = [
]
const details = `This project was a blast. A first introduction to both servers and websocket communication, among many other tools such as Nodemon, and Cors. RoShamBo helped me understand server/client relationship and improve my logic building. <br/>
Tools used: HTML, CSS, React, Javascript, Express, Socket.io  <br/>
<a href=${REPO} target='_blank'>Repo</a>  
`
function Roshambo({ setSelectedProject, selectedProject, windowSize }) {
    const roshambo = useRef()
    const gif = useRef()
    const [hovered, setHovered] = useState(null)
    const scale = useSpring(1)
    const opacity = useSpring(0, {
        stiffness: 50
    })
    
    useEffect(()=>{
        if(hovered){
            scale.set(1.2)
            opacity.set(1)
            // video.current.play()
            gif.current.src = '../assets/images/projects/roshambo/roshambo-large.gif'
        } else {
            scale.set(1)
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            // video.current.pause()
            // video.current.currentTime = 0
            gif.current.src = '../assets/images/projects/roshambo/gif-cover.PNG'
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
        <img src="../assets/images/projects/roshambo/gif-cover.PNG" alt="Rock Paper Scissors game" ref={ gif } style={{width: '280px', height: '180px'}}/>
        <motion.div className='project-overlay-bg' style={{ opacity: 1 }}>
        <span>RoShamBo</span>
            <motion.div className='project-overlay-bg-btns' style={{ opacity }}>
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/RoShamBo' target='_blank'>Repo</a></button>
                {/* <button className='project-overlay-btn'>Deployed</button> */}
                
                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
            </motion.div>
            
            
            
        </motion.div>
        
    </motion.div>
  )
}

export default Roshambo