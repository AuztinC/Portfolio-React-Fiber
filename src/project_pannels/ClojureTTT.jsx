import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion'
const REPO = 'https://github.com/AuztinC/Clojure-tic-tac-toe'
const imageSrc = [
    '../assets/images/projects/clojure-ttt/cli-home.png',
    '../assets/images/projects/clojure-ttt/cli-ingame-4x4.png',
    '../assets/images/projects/clojure-ttt/quil-home.png',
    '../assets/images/projects/clojure-ttt/quil-ingame-3x3x3.png',
    '../assets/images/projects/clojure-ttt/web-home.png',
    '../assets/images/projects/clojure-ttt/web-ingame-3x3.png',
]
const details = `Clojure Tic-Tac-Toe is a tic tac toe platform that was built over the span of my apprenticeship at Clean Coders. This project started as a simple cli game with minimal behavior and evolved into system with multiple GUIs and storage implementations to choose from. I learned so much while adding these behaviors into the project. Architecture and system design were key focuses throughout development. Learning how to properly use TDD and separate boundaries to make the code easily refactorable and new features to be added with minimal backtracking. <br/>
Tools used: Clojure, ClojureScript, Quil, TDD, Hiccup, Reagent/React <br/>
<a href=${REPO} target='_blank'>Repo</a>  <br/>
`
function ClojureTTT({ setSelectedProject , selectedProject, windowSize }) {
    const clojureTTT = useRef()
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
            gif.current.src = '../assets/images/projects/clojure-ttt/quil-aigame-3x3x3.gif'
        } else {
            scale.set(1)
            opacity.set(windowSize.width <= 950 ? 1 : 0)
            gif.current.src = '../assets/images/projects/clojure-ttt/web-home.png'
        }
    }, [hovered])
    function Popout(){
        if(selectedProject === null){
            setSelectedProject({ 
                images: imageSrc, 
                video: 'clojure-ttt/quil-aigame-3x3x3.mov', 
                details, position: [getOffset(clojureTTT.current).left, getOffset(clojureTTT.current).top]
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
    <motion.div className='project clojureTTT' 
    ref={ clojureTTT } 
    onPointerLeave={()=>setHovered(null)} 
    onPointerEnter={()=>setHovered(clojureTTT)} 
    style={ { scale } } 
    >
        <img src='../assets/images/projects/clojure-ttt/web-home.png'  ref={ gif } style={{width: '280px', height: '180px'}}/>
        <motion.div className='project-overlay-bg' style={{ opacity: 1 }}>
        <span>Clojure Tic-Tac-Toe</span>
        <motion.div className='project-overlay-bg-btns' style={{ opacity }}>
            <button className='project-overlay-btn'><a href='https://github.com/AuztinC/Clojure-tic-tac-toe' target='_blank'>Repo</a></button>
            <button className='project-overlay-btn' onClick={ Popout }>More Info</button>
        </motion.div>
                
        </motion.div>
    </motion.div>
  )
}

export default ClojureTTT