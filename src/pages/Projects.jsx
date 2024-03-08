import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import Avacardios from '../project_pannels/Avacardios'
import Testris from '../project_pannels/Testris'
import Roshambo from '../project_pannels/Roshambo'
import Hangman from '../project_pannels/Hangman'
import Rememberer from '../project_pannels/Rememberer'
import Project_popout from '../project_pannels/Project_popout'
import FreshPicsYo from '../project_pannels/FreshPicsYo'


//  selectedProject = {
//   images: [],
//   video: '',
//   details: '',
//   position: [x, y]
// }

const PC_Projects = ({ windowSize })=>{
  const [selectedProject, setSelectedProject] = useState(null)


  return (
    <>
      <div className='projects-div'>
        <div className='projects-column'>
          <Hangman setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Rememberer setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Roshambo setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
        </div>
      
        <div className='projects-column'>
          <Avacardios setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Testris setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
          <FreshPicsYo  setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
          {/* <Chatapp /> */}
        </div>
        <div style={{width: '100%', textAlign: 'center'}}>
          <div className='projects-github'>Find more of my projects on <a href='https://github.com/AuztinC' target='_blank'>Github</a></div>
          <div className='projects-github'>Download my resume: <a href={'../assets/Austin_Cripe_Software_Dev_Resume.pdf'} download="Austin-Cripe-Resume">Resume</a></div>
        </div>
      </div>
      { selectedProject ? <Project_popout selectedProject={ selectedProject } setSelectedProject={ setSelectedProject }/> : null}
    </>
  )
}

const Mobile_Projects = ({ windowSize })=>{
  const [selectedProject, setSelectedProject] = useState(null)


  return (
    <>
    <div className='projects-div'>
      <div className='projects-column'>
        <Hangman setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
        <Rememberer setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
        <Roshambo setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
      </div>
      
      <div className='projects-column'>
        <Avacardios setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
        <Testris setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
        <FreshPicsYo  setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
        <Chatapp />
      </div>
      <div className='projects-github'>Find more of my projects on <a href='https://github.com/AuztinC' target='_blank'>Github</a></div>
      <div className='projects-resume'>Download my resume: <a download={'../assets/Austin-Cripe-Software-Dev-Resume.pdf'}>Resume</a></div>
    </div>
      { selectedProject ? <Project_popout selectedProject={ selectedProject } setSelectedProject={ setSelectedProject }/> : null}
    </>
  )
}

function Projects({ windowSize }) {

  const [selectedProject, setSelectedProject] = useState(null)
  useEffect(() => {
    if(windowSize.width <= 750){ // 750 PIXELS
      // console.log(windowSize)
    }
  }, [windowSize])


  return (
    <motion.div className='projects-container' 
    initial={{ y: '100%' }}
    animate={{ y: '0' }}
    exit={{ y: -window.innerWidth, transition: { duration: 0.3 } }}
    >
        {/* <Mobile_Projects selectedProject={ selectedProject } setSelectedProject={ setSelectedProject } windowSize={ windowSize }/> */}
      <PC_Projects selectedProject={ selectedProject } setSelectedProject={ setSelectedProject } windowSize={ windowSize }/>
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