import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Projects() {
    const [selected, setSelected] = useState()
  return (
    <motion.div className='projects-container' 
    initial={{ x: '100%' }}
    animate={{ x: '0' }}
    exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
        <div className='projects-column'>
            <div className='project'>
                <img src="../assets/images/projects/hangman/hangman_home_full.PNG" alt="memember" />
            </div>
            <div className='project'>
                <img src="../assets/images/projects/rememberer/home_page_full.PNG" alt="memember" />
                
            </div>
            <div className='project'>
                <img src="../assets/images/projects/testris/ingame_full.PNG" alt="memember" />
                
            </div>
        </div>
        <div className='projects-column'>
            <div className='project'>
                <img src="../assets/images/projects/avacardios/home_page.PNG" alt="memember" />
                
            </div>
            <div className='project'>
                <img src="../assets/images/projects/avacardios/home_page.PNG" alt="memember" />
                
            </div>
            <div className='project'>
                <img src="../assets/images/projects/rememberer_home_full.PNG" alt="memember" />
                
            </div>
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