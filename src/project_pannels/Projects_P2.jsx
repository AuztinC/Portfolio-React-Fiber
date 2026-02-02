import React from 'react'
import { motion } from 'framer-motion'
import Avacardios from './Avacardios'
import Testris from './Testris'
import Roshambo from './Roshambo'
import Hangman from './Hangman'
import Rememberer from './Rememberer'
import FreshPicsYo from './FreshPicsYo'

function Projects_P2({ setSelectedProject, selectedProject, windowSize }) {
  return (
    <motion.div className='projects-p1'>
        <div className='projects-column'>
          <Hangman setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Rememberer setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Roshambo setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          {/* <Chatapp setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/> */}
        </div>
      
        <div className='projects-column'>
          <Avacardios setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
          <Testris setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
          <FreshPicsYo  setSelectedProject={ setSelectedProject } selectedProject={ selectedProject } windowSize={ windowSize }/>
        </div>
    </motion.div>
  )
}

export default Projects_P2