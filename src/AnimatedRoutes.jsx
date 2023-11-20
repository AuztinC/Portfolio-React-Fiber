import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

function AnimatedRoutes({ windowSize }) {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={ location } key={ location.pathname }>
            <Route path='/' element={ <About windowSize={ windowSize }/> } />
            <Route path='/About' element={ <About windowSize={ windowSize }/> } />
            <Route path='/Projects' element={ <Projects windowSize={ windowSize }/> } />
            <Route path='/Contact' element={ <Contact windowSize={ windowSize }/> } />
        </Routes>
    </AnimatePresence>
  )
  
}

export default AnimatedRoutes