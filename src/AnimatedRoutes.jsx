import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Projects from './Projects'
import Contact from './Contact'

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={ location } key={ location.pathname }>
            <Route path='/Projects' element={ <Projects /> } />
            <Route path='/Contact' element={ <Contact /> } />
        </Routes>
    </AnimatePresence>
  )
  
}

export default AnimatedRoutes