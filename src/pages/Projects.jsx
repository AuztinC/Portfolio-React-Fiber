import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Project_popout from '../project_pannels/Project_popout'
import Projects_P1 from '../project_pannels/Projects_P1'
import Projects_P2 from '../project_pannels/Projects_P2'


const PC_Projects = ({ windowSize })=>{
  const [selectedProject, setSelectedProject] = useState(null)
  const [exitProject, setExitProject] = useState(true)
  const [page, setPage] = useState(1)
  
  
  useEffect(()=>{
    if(selectedProject){
      setExitProject(false)
    } else {
      // setExitProject(true)
    }
  }, [selectedProject])

  return (
    <>
      <div className='projects-div'>
        {/* <div className='project-page-btns'>
          <div className='project-page-btn-webdev' onClick={()=>setPage(1)}>Web Dev</div>
          <div className='project-page-btn-logic' onClick={()=>setPage(2)}>Logic Project</div>
        </div> */}
        
        { page === 1 ? <Projects_P1 setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>
         : 
         <Projects_P2 setSelectedProject={ setSelectedProject }  selectedProject={ selectedProject } windowSize={ windowSize }/>}
        
        
        <div style={{width: '100%', textAlign: 'center'}}>
          <div className='projects-github'>Find more of my projects on <a href='https://github.com/AuztinC' target='_blank'>Github</a></div>
        </div>
        
      </div>
      { selectedProject ? (
        <Project_popout selectedProject={ selectedProject } setSelectedProject={ setSelectedProject } exitProject={ exitProject }/>
      ) : null}
    </>
  )
}

function Projects({ windowSize }) {
  return (
    <>
      <motion.div className='projects-container' 
      initial={{ y: '100%' }}
      animate={{ y: '0' }}
      exit={{ y: -window.innerWidth, transition: { duration: 0.3 } }}
      >
        <PC_Projects windowSize={ windowSize }/>
        
      </motion.div>
    </>
  )
}

export default Projects