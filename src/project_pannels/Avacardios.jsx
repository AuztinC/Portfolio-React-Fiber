import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
const DEPLOYED_SITE = 'https://testris.netlify.app/'
const REPO = 'https://github.com/AuztinC/Testris_02'
const imageSrc = [
    '../assets/images/projects/avacardios/home_page.PNG',
    '../assets/images/projects/avacardios/admin.PNG',
    '../assets/images/projects/avacardios/addresses.PNG',
    '../assets/images/projects/avacardios/toast.PNG',
]
const details = `Avacardios was my capstone project. Completed in 10 days in a group of 4 developers. We worked closely together and collaborted daily to maintain a cohesive feel. While doing CSS and designing the user experience, I also implemented the user authentication system using Firebase, as well as help my team-mates tie in their additions. <br/>
Tools used: HTML, CSS, Javascript, Canvas  <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a> <br/>
Login as an admin! Username: ethyl, Password: 1234
`
function Avacardios({ setSelectedProject , selectedProject, windowSize }) {
    const avacardios = useRef()
    const video = useRef()
    const gif = useRef()
    const [hovered, setHovered] = useState(null)
    const scale = useSpring(1)
    const opacity = useSpring(0, {
        stiffness: 50
    })
    
    useEffect(() => {
    //   video.current.muted = true
    }, [video])
    
    useEffect(()=>{
        if(hovered){
            scale.set(1.2)
            opacity.set(1)
            // video.current.play()
            gif.current.src = '../assets/images/projects/avacardios/login-order-logout-resize-crop.gif'
        } else {
            scale.set(1)
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            // video.current.pause()
            // video.current.currentTime = 0
            gif.current.src = '../assets/images/projects/avacardios/home_page.PNG'
        }
    }, [hovered])
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'avacardios/login-order-logout.mp4', 
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
    // style={{width: '280px', height: '180px'}}
  return (
    <motion.div className='project avacardios' 
    ref={ avacardios } 
    onPointerLeave={()=>setHovered(null)} 
    onPointerEnter={()=>setHovered(avacardios)} 
    style={ { scale } } 
    >
        <img src='../assets/images/projects/avacardios/home_page.PNG'  ref={ gif } style={{width: '280px', height: '180px'}}/>
        {/* <video width="320" height="240" ref={ video } muted={true}>
            <source src="../assets/images/projects/avacardios/login-order-logout.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video> */}
        <motion.div className='project-overlay-bg' style={{ opacity }}>
        <span>Avacardios</span>
        <div className='project-overlay-bg-btns'>
            <button className='project-overlay-btn'><a href='https://github.com/Avacardios/Avacardios' target='_blank'>Repo</a></button>
            <button className='project-overlay-btn'><a href='https://avacardios-store.onrender.com/' target='_blank'>Deployed</a></button>
            <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
        </div>
                
        </motion.div>
    </motion.div>
  )
}

export default Avacardios