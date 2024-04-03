"use client";
import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThreeDotsVertical } from "react-bootstrap-icons";

function Navigation({ scrollToProfile }: any) {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState<any>('home');
  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const skills = document.getElementById('skills');
      const projects = document.getElementById('projects');
      const experience = document.getElementById('experience');
      const contact = document.getElementById('contact');

      if (!home || !projects || !experience || !contact || !skills) {
        return;
      }

      const sections = [home, skills, experience, projects, contact];

      sections.forEach((section , index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect) {
            const top = rect.top;
            const bottom = rect.bottom;
            if (index == 2 || index == 3) {
              if ((top < 400) && (bottom + 200 > 100)) {
                setActiveSection(section.id);
              }  
              return;
            }
            if ((top - 100 < 100) && (bottom + 200 > 100)) {
              setActiveSection(section.id);
            }
          }
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveSection(sectionId);
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <div className="nav">
        <a className="link toggle">
          <DarkModeToggle />
        </a>
        <a className={['link' , activeSection === 'home' ? 'selected' : ''].join(' ')}  onClick={() => handleNavClick('home')}>
          <span>Home</span>
        </a>
        <a className={['link' , activeSection === 'skills' ? 'selected' : ''].join(' ')}  onClick={() => handleNavClick('skills')}>
          Skills
        </a>
        <a className={['link' , activeSection === 'experience' ? 'selected' : ''].join(' ')}  onClick={() => handleNavClick('experience')}>
          Experience
        </a>
        <a className={['link' , activeSection === 'projects' ? 'selected' : ''].join(' ')}  onClick={() => handleNavClick('projects')}>
          Projects
        </a>
        <a className={['link' , activeSection === 'contact' ? 'selected' : ''].join(' ')}  onClick={() => handleNavClick('contact')}>
          Contact
        </a>
      </div>
      <div className="topbar">
        <a className="link toggle" style={{padding: '0px'}}>
          <DarkModeToggle />
        </a>
        <a
          className="link menu"
          style={{ transform: nav ? "rotate(90deg)" : "rotate(0deg)" }}
          onClick={() => {
            setNav((prev) => !prev);
          }}
        >
          <ThreeDotsVertical
            className="three_dots"
            style={{ color: "#64ffda", width: "30px", height: "48px" }}
          />
        </a>
      </div>
      {nav && (
        <nav className="navbar">
          <a
            className={['link' , activeSection === 'home' ? 'selected' : ''].join(' ')}
            onClick={(e) => {
              setNav((prev) => !prev);
              handleNavClick("home");
            }}
            href="#home"
          >
            <span>Home</span>
          </a>
          <a
            className={['link' , activeSection === 'skills' ? 'selected' : ''].join(' ')}
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#skills"
          >
            Skills
          </a>

          <a
            className={['link' , activeSection === 'experience' ? 'selected' : ''].join(' ')}
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#experience"
          >
            Experience
          </a>
          <a
            className={['link' , activeSection === 'projects' ? 'selected' : ''].join(' ')}
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={['link' , activeSection === 'contact' ? 'selected' : ''].join(' ')}
            onClick={() => {
              setNav((prev) => !prev);
            }}
            href="#contact"
          >
            Contact
          </a>
        </nav>
      )}
    </>
  );
}

export default Navigation;
