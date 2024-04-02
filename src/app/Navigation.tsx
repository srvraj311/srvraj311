import React from 'react'
import DarkModeToggle from './DarkModeToggle'

function Navigation() {
  return (
    <div className='nav'>
        
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <DarkModeToggle />
    </div>
  )
}

export default Navigation