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
        backgroundColor: isDarkMode ? 'var(--light-bg)' : 'white',
        transition: '0.2s ease-in-out all',
        transform: isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)',
        fontSize: '35px', 
        width: '48px',
        height: '48px',
        border: '1px solid var(--color)'
        }} />
    </button>
  );
};

export default DarkModeToggle;