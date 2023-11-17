import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={ location } key={ location.pathname }>
            <Route path='/About' element={ <About /> } />
            <Route path='/Projects' element={ <Projects /> } />
            <Route path='/Contact' element={ <Contact /> } />
        </Routes>
    </AnimatePresence>
  )
  
}

export default AnimatedRoutes