import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'

const DEPLOYED_SITE = 'https://pern-chat-3s6h.onrender.com/'
const REPO = 'https://github.com/AuztinC/PERN-ChatApp'
const imageSrc = [
    '../assets/images/projects/chatterbox/usersearch.PNG',
    '../assets/images/projects/chatterbox/typingbubbles.PNG',
    '../assets/images/projects/chatterbox/login.PNG',
]
const details = `ChatterBox is a real-time chat application. During this project I faced many challenges including building an Express server to manage Socket.IO WebSocket connections, User authentication using PostgreSQL, and front-end state management. <br/>
Tools used: React, HTML, CSS, SQL, Express, Node  <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a> <br/>
`

function Chatapp({ setSelectedProject, selectedProject, windowSize }) {
    const chatapp = useRef()
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
            gif.current.src = 'public/assets/images/projects/chatterbox/login-lobbychat.gif'
        } else {
            scale.set(1)
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            // video.current.pause()
            // video.current.currentTime = 0
            gif.current.src = 'public/assets/images/projects/chatterbox/login.PNG'
        }
    }, [hovered])
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'chatterbox/login-lobbychat.mov', 
                details, position: [getOffset(chatapp.current).left, getOffset(chatapp.current).top] 
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
        ref={ chatapp } 
        onPointerLeave={()=>setHovered(null)} 
        onPointerEnter={()=>setHovered(chatapp)} 
        style={ { scale } } 
        muted={true}
    >
        <img src="../assets/images/projects/chatterbox/login.PNG" alt="Chatterbox Login Page" ref={ gif } style={{width: '280px', height: '180px'}}/>
        <motion.div className='project-overlay-bg' style={{ opacity: 1 }}>
        <span>Chatterbox</span>
            <motion.div className='project-overlay-bg-btns' style={{ opacity }}>
                <button className='project-overlay-btn'><a href='https://github.com/AuztinC/PERN-ChatApp' target='_blank'>Repo</a></button>
                <button className='project-overlay-btn'><a href='https://pern-chat-3s6h.onrender.com/' target='_blank'>Deployed</a></button>
                
                <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
            </motion.div>
            
            
            
        </motion.div>
        
    </motion.div>
  )
}

export default Chatapp