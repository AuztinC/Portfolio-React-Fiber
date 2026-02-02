import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
const DEPLOYED_SITE = 'https://auztinc.github.io/fresh-pics-yo/#q=%20c=undefined%20p=NaN'
const REPO = 'https://github.com/AuztinC/fresh-pics-yo'
const imageSrc = [
    '../assets/images/projects/freshpicsyo/home_full.PNG',
    '../assets/images/projects/freshpicsyo/car_red_full.PNG',
    '../assets/images/projects/freshpicsyo/animal_full.PNG',
]
const details = `The Freshest Pics! A fun project using Pixabay.com's API to make an image searching website, ad free. I learned a lot about designing a sleek layout and hash management. Completed while pair programming with a local developer. <br/>
Tools used: HTML, CSS, Javascript, React  <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a>
`
function FreshPicsYo({ setSelectedProject , selectedProject, windowSize }) {
    const avacardios = useRef()
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
            gif.current.src = '../assets/images/projects/freshpicsyo/fresh-pix.gif'
        } else {
            scale.set(1)
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            // video.current.pause()
            // video.current.currentTime = 0
            gif.current.src = '../assets/images/projects/freshpicsyo/home_full.PNG'
        }
    }, [hovered])
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'freshpicsyo/freshpix.mp4', 
                details, position: [getOffset(avacardios.current).left, getOffset(avacardios.current).top] 
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
    <motion.div className='project avacardios' 
    ref={ avacardios } 
    onPointerLeave={()=>setHovered(null)} 
    onPointerEnter={()=>setHovered(avacardios)} 
    style={ { scale } } 
    >
        <img src='../assets/images/projects/freshpicsyo/home_full.PNG'  ref={ gif } style={{width: '280px', height: '180px'}}/>
        <motion.div className='project-overlay-bg' style={{ opacity: 1 }}>
            <span>FreshPicsYo</span>
            <motion.div className='project-overlay-bg-btns' style={{ opacity }}>
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/fresh-pics-yo' target='_blank'>Repo</a></button>
                <button className='project-overlay-btn'><a href='https://auztinc.github.io/fresh-pics-yo/' target='_blank'>Deployed</a></button>
                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
            </motion.div>
                
        </motion.div>
    </motion.div>
  )
}

export default FreshPicsYo