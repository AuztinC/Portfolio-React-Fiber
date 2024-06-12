import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'

const DEPLOYED_SITE = 'https://pern-chat-3s6h.onrender.com/'
const REPO = 'https://github.com/AuztinC/PERN-ChatApp'
const imageSrc = [
    '../assets/images/projects/avacardios/home_page.PNG',
    '../assets/images/projects/avacardios/admin.PNG',
    '../assets/images/projects/avacardios/addresses.PNG',
    '../assets/images/projects/avacardios/toast.PNG',
]
const details = `ChatterBox is a real-time chat application. This project had many challenges including the creation of chat rooms both group and private. <br/>
Tools used: React, HTML, CSS, SQL, Express, Node  <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
<a href=${DEPLOYED_SITE} target='_blank'>Deployed Site</a> <br/>
`

function Chatapp() {
    const chatapp = useRef()
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
    useEffect(()=>{
        if(hovered){
            scale.set(1.2)
        } else {
            scale.set(1)
        }
    }, [hovered])
  return (
    <motion.div className='project' ref={ chatapp } onPointerLeave={()=>setHovered(null)} onPointerEnter={()=>setHovered(chatapp)} style={ { scale } } >
        <video width="320" height="240" ref={ video } muted={true}>
            <source src="../assets/images/projects/roshambo/no-edit.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <motion.div className='project-overlay-bg' style={{ opacity }}>
            
                <button className='project-overlay-btn'>Repo</button>
                <button className='project-overlay-btn'>Deployed</button>
                
            
            
            
                <button className='project-overlay-btn'>More Info</button>
                
            
            
            
        </motion.div>
    </motion.div>
  )
}

export default Chatapp