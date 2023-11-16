import React, { useEffect, useState, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import Avacardios from './project_pannels/Avacardios'
import Testris from './project_pannels/Testris'
import Roshambo from './project_pannels/Roshambo'
import Hangman from './project_pannels/Hangman'
import Rememberer from './project_pannels/Rememberer'

function Projects() {

  return (
    <motion.div className='projects-container' 
    initial={{ x: '100%' }}
    animate={{ x: '0' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
        <div className='projects-div'>
          <div className='projects-column'>
            <Hangman />
            <Rememberer />
            <Roshambo />
            
          </div>
          <div className='projects-column'>
            <Avacardios />
            <Testris />
            {/* <Chatapp /> */}
          </div>
        <div className='projects-github'>Find more of my projects on <a href='https://github.com/AuztinC' target='_blank'>Github</a></div>
        </div>
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