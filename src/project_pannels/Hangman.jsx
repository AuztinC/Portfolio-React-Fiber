import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
const DEPLOYED_SITE = 'https://ac-hangman.netlify.app/'
const REPO = 'https://github.com/AuztinC/HangMan'
const imageSrc = [
    '../assets/images/projects/hangman/home_full.PNG',
    '../assets/images/projects/hangman/loss_full.PNG'
]
const details = `A really fun project using multi-dementional arrays and canvas. Users scores are saved to local storage. This project vastly helped my knowledge of arrays and loops, building my overall Javascript fundementals. <br/>
Tools used: HTML, CSS, Javascript  <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a>
`
function Hangman({ setSelectedProject, selectedProject, windowSize }) {
    const hangman = useRef()
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
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            video.current.pause()
            video.current.currentTime = 0
        }
    }, [hovered])
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'hangman/quick-full.mp4', 
                details, position: [getOffset(hangman.current).left, getOffset(hangman.current).top] 
            })
        } else{
            return
        }
        
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
    ref={ hangman } 
    onPointerLeave={()=>setHovered(null)} 
    onPointerEnter={()=>setHovered(hangman)} 
    style={ { scale } } 
    >
        <video width="320" height="240" ref={ video } muted={true}>
            <source src="../assets/images/projects/hangman/quick-full.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <motion.div className='project-overlay-bg' style={{ opacity }}>
        <span>Hangman</span>
        <div className='project-overlay-bg-btns'>
            <button className='project-overlay-btn'><a href='https://github.com/AuztinC/HangMan' target='_blank'>Repo</a></button>
            <button className='project-overlay-btn'><a href='https://ac-hangman.netlify.app/' target='_blank'>Deployed</a></button>
            <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
        </div>
            
            
            
        </motion.div>
    </motion.div>
  )
}

export default Hangman