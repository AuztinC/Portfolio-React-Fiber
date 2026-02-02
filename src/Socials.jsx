import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons'

function Socials() {
  const [latestResume, setLatestResume] = useState('/assets/01-30-2026-AustinCripeResume.pdf')

  useEffect(() => {
    const resumeFiles = import.meta.glob('/public/assets/*-AustinCripeResume.pdf', { eager: false, as: 'url' })
    
    if (Object.keys(resumeFiles).length > 0) {
      const sortedResumes = Object.keys(resumeFiles).sort((a, b) => {
        const dateRegex = /(\d{2})-(\d{2})-(\d{4})/
        const matchA = a.match(dateRegex)
        const matchB = b.match(dateRegex)
        
        if (matchA && matchB) {
          const dateA = new Date(`${matchA[3]}-${matchA[1]}-${matchA[2]}`)
          const dateB = new Date(`${matchB[3]}-${matchB[1]}-${matchB[2]}`)
          return dateB - dateA
        }
        return 0
      })
      
      if (sortedResumes[0]) {
        const resumePath = sortedResumes[0].replace('/public', '')
        setLatestResume(resumePath)
      }
    }
  }, [])

  return (
    <div className='socials-container'>
    <a
      className='socials-resume-link'
      href={latestResume}
      download='Austin-Cripe-Resume'>
        <FontAwesomeIcon icon={faFile} />
      <span className='socials-resume-text'>Resume</span>
    </a>
        <a href='https://www.linkedin.com/in/austin-cripe/' target='_blank'>
            <img src="../assets/images/logo/logo-linkedin.png" alt="" />
        </a>
        <a href='https://github.com/AuztinC' target='_blank'>
            <img src="../assets/images/logo/logo-github.png" alt="" />
        </a>
    </div>
  )
}

export default Socials