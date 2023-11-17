import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import Avacardios from '../project_pannels/Avacardios'
import Testris from '../project_pannels/Testris'
import Roshambo from '../project_pannels/Roshambo'
import Hangman from '../project_pannels/Hangman'
import Rememberer from '../project_pannels/Rememberer'
import Project_popout from '../project_pannels/Project_popout'


//  selectedProject = {
//   images: [],
//   video: '',
//   details: '',
//   position: [x, y]
// }

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
    window.addEventListener('click', handleclick)
    
    return () => {
      window.removeEventListener('click', handleclick)
    }
  }, [])
  function handleclick(ev){
    console.log(ev.target)
  }
  
  return (
    <motion.div className='projects-container' 
    initial={{ y: '100%' }}
    animate={{ y: '0' }}
    exit={{ y: -window.innerWidth, transition: { duration: 0.3 } }}
    >
        <div className='projects-div'>
          <div className='projects-column'>
            <Hangman setSelectedProject={ setSelectedProject }/>
            <Rememberer setSelectedProject={ setSelectedProject }/>
            <Roshambo setSelectedProject={ setSelectedProject }/>
            
          </div>
          <div className='projects-column'>
            <Avacardios setSelectedProject={ setSelectedProject }/>
            <Testris setSelectedProject={ setSelectedProject }/>
            {/* <Chatapp /> */}
          </div>
        <div className='projects-github'>Find more of my projects on <a href='https://github.com/AuztinC' target='_blank'>Github</a></div>
        </div>
        { selectedProject ? <Project_popout selectedProject={ selectedProject } setSelectedProject={ setSelectedProject }/> : null}
    </motion.div>
  )
}

export default Projects

// Testris
// Avacardios
// Rememberer
// RoShamBo
// WebChatter
// Hangman