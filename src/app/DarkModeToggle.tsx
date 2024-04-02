"use client"
import React, { useState, useEffect } from 'react';
import { Sun } from 'react-bootstrap-icons';


const DarkModeToggle = () => {
    
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    (): any => { 
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isDarkMode') === 'true'
        }
        else false;
    }
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        localStorage.setItem('isDarkMode', isDarkMode as any);
        document.body.classList.toggle('dark', isDarkMode as any);
    }
    
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(() => !isDarkMode);
    document.documentElement.style.setProperty('--color', isDarkMode ? '#052f24' : '#64ffda');
    document.documentElement.style.setProperty('--color-secondary', isDarkMode ? '#e7e7e7' : '#515151');
    document.documentElement.style.setProperty('--light-bg', isDarkMode ? '#fbfbfb' : '#112240');
    document.documentElement.style.setProperty('--lightest-bg', isDarkMode ? '#b1b1b1' : '#233554');

  };

  return (
    <button onClick={toggleDarkMode}>
      <Sun className='sun' style={ 
        { 
        color: isDarkMode ? 'var(--color)' : 'black', 
        backgroundColor: isDarkMode ? 'var(--light-bg)' : 'var(--lightest-bg)',
        fontSize: '35px', 
        position: 'fixed',
        width: '60px',
        right: isDarkMode ? '-30px' : '50px',
        top: '-4px'
        }} />
    </button>
  );
};

export default DarkModeToggle;