import { motion, useAnimate  } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function Nav_Container ({ enteredWebsite, windowSize, Home }) {
  const location = useLocation()
  const [navCont, animate] = useAnimate()

  useEffect(() => {
    let timer = null
    if (enteredWebsite) {
      animate(navCont.current, { top: '0%' }, { duration: 1 })
      animate(navCont.current, { opacity: 1 }, { duration: 1 })
      navCont.current.style.display = 'flex'
      clearTimeout(timer)
    } else {
      animate(navCont.current, { top: '110%' }, { duration: 1 })
      animate(navCont.current, { opacity: 0 }, { duration: 1 })
    }
  }, [enteredWebsite])

  return (
    <motion.div className='nav-container' ref={navCont}>
      <Link to={'/'}
        className={`nav-link `}
        style={{ display: windowSize.width <= 900 ? 'none' : 'inline' }}
        onClick={Home}>
      </Link>
      <Link to={'/About'}
        className={`nav-link ${location.pathname === '/About' || location.pathname === '/' ? 'selected' : ''}`}>
        About
      </Link>
      <Link to={'/Projects'}
        className={`nav-link ${location.pathname === '/Projects' ? 'selected' : ''}`}>
        Projects
      </Link>
      <Link to={'/Contact'}
        className={`nav-link ${location.pathname === '/Contact' ? 'selected' : ''}`}>
        Contact
      </Link>
      <Link to={'/Blog'}
        className={`nav-link ${location.pathname === '/Blog' ? 'selected' : ''}`}>
        Blog
      </Link>
    </motion.div>

  )
}