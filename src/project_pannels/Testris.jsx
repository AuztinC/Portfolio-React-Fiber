import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionTemplate } from 'framer-motion'
const DEPLOYED_SITE = 'https://testris.netlify.app/'
const REPO = 'https://github.com/AuztinC/Testris_02'
function Testris({ setSelectedProject }) {
    const imageSrc = [
        '../assets/images/projects/testris/ingame_full.PNG'
    ]
    const details = `A really fun project using multi-dementional arrays and canvas. Users scores are saved to local storage. This project vastly helped my knowledge of arrays and loops, building my overall Javascript fundementals. <br/>
    Tools used: HTML, CSS, Javascript, Canvas  <br/>
    <a href=${REPO} target='_blank'>Repo</a>  <br/>
    <a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a>
    `
    const testris = useRef()
    const video = useRef()
    const projectInfo = useRef()
    const [displayInfo, setDisplayInfo] = useState('none')
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
            // setDisplayInfo('none')
        }
    }, [hovered])
    function Popout(){
        // scale.set(4)
        // opacity.set(0)
        // setDisplayInfo('block')
        setSelectedProject({ 
            images: imageSrc, 
            video: 'testris/ingame_full.mp4', 
            details, position: [getOffset(testris.current).left, getOffset(testris.current).top] 
        })
        // console.log(getOffset(testris.current).left)
        // console.log(getOffset(testris.current).bottom)
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

//  selectedProject = {
//   images: [],
//   video: '',
//   details: '',
//   position: [x, y]
// }
  return (
    // width="320" height="240" 4/3
    <motion.div className='project' ref={ testris } onPointerLeave={()=>setHovered(null)} onPointerEnter={()=>setHovered(testris)} style={ { scale } } >
        <video width="320" height="240" loop ref={ video } muted={true}>
            <source src="../assets/images/projects/testris/ingame_full.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        
        <motion.div className='project-overlay-bg' style={{ opacity }} >
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/Testris_02' target='_blank'>Repo</a></button>
                <button className='project-overlay-btn'><a href='https://testris.netlify.app/' target='_blank'>Deployed</a></button>
                

                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
                
        </motion.div>
        
        {/* <motion.div className='project-popout' >
            <video width="320" height="240" muted={true} controls>
                <source src="../assets/images/projects/testris/ingame_full.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div ref={ projectInfo } style={{ display: displayInfo, fontSize: '0.1em'}}>
            <p>
                A really fun project using multi-dementional arrays and canvas. Users scores are saved to local storage. This project vastly helped my knowledge of arrays and loops, building my overall Javascript fundementals.
            </p>
        </div>
        </motion.div> */}
    </motion.div>
  )
}

export default Testris