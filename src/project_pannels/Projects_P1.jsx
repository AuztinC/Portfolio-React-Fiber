import React from 'react'
import { motion } from 'framer-motion'
import Avacardios from '../project_pannels/Avacardios'
import Testris from '../project_pannels/Testris'
import Hangman from '../project_pannels/Hangman'
import Rememberer from '../project_pannels/Rememberer'
import FreshPicsYo from '../project_pannels/FreshPicsYo'
import Chatapp from '../project_pannels/Chatapp'
import ClojureTTT from '../project_pannels/ClojureTTT'

function Projects_P1({ setSelectedProject, selectedProject, windowSize, exitProject }) {
  return (
    <motion.div className='projects-p1'>
        <div className='projects-column'>
          {/* <Hangman setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/> */}
          <ClojureTTT setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Rememberer setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          {/* <Roshambo setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/> */}
          <Chatapp setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
        </div>
      
        <div className='projects-column'>
          <Avacardios setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Testris setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
          <FreshPicsYo  setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
        </div>
    </motion.div>
  )
}

export default Projects_P1