import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
const DEPLOYED_SITE = 'https://auztinc.github.io/Rememberer/'
const REPO = 'https://github.com/AuztinC/Rememberer'
const imageSrc = [
    '../assets/images/projects/rememberer/home_page_full.PNG',
    '../assets/images/projects/rememberer/ingame_mobile_01.PNG',
    '../assets/images/projects/rememberer/ingame_full_01.PNG',
]
const details = `Rememberer became a big project for me. I used React for this project and am very glad I did. With this project, I learned so much, including how to properly handle state, pass props, and use the window's hash. <br/>
Tools used: HTML, CSS, React, <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a>
`
function Rememberer({ setSelectedProject, selectedProject }) {
    const rememberer = useRef()
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
                video: 'rememberer/full-run-quick.mp4', 
                details, position: [getOffset(rememberer.current).left, getOffset(rememberer.current).top] 
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
    ref={ rememberer } 
    onPointerLeave={()=>setHovered(null)} 
    onPointerEnter={()=>setHovered(rememberer)} 
    style={ { scale } } 
    >
        <video width="320" height="240" ref={ video } muted={true}>
            <source src="../assets/images/projects/rememberer/full-run-quick.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <motion.div className='project-overlay-bg' style={{ opacity }}>
            
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/Rememberer' target='_blank'>Repo</a></button>
                <button className='project-overlay-btn'><a href='https://auztinc.github.io/Rememberer/' target='_blank'>Deployed</a></button>
                
                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
                
        </motion.div>
    </motion.div>
  )
}

export default Rememberer