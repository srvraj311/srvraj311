import React from 'react'
import DarkModeToggle from './DarkModeToggle'

function Navigation() {
  return (
    <div className='nav'>
     <a><DarkModeToggle /></a>
      <a href="#home"><span>Home</span></a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  )
}

export default Navigation