"use client";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experiences from "./Experiences/Experiences";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation";
import ShadowPointer from "./ShadowPointer";

function App() {
  const profileRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling to the profile section
  const scrollToProfile = () => {
    if (profileRef.current) {
      profileRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <ShadowPointer />
    <Profile ref={profileRef} />
    <Skills />
    <Experiences />
    <Projects />
    <Footer />
    <Navigation scrollToProfile={scrollToProfile} />
    </div>
  );
}

export default App;
