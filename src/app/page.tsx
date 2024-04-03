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
  // useEffect(() => {
  //   (window as any).pendo.initialize({
  //     visitor: {
  //         id: new Date().getTime(),
  //         device: window.navigator.userAgent,
  //         platform : window.navigator.platform,
  //         language: window.navigator.language,
  //         cookieEnabled: window.navigator.cookieEnabled,
  //         screenResolution: window.screen.width + 'x' + window.screen.height,
  //         screenViewed: window.screen.width + 'x' + window.screen.height,
  //         colorDepth: window.screen.colorDepth,
  //         onLine: window.navigator.onLine,
  //         timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  //         browser: window.navigator.userAgent,
  //         mediaDevices: window.navigator.mediaDevices,
  //         history: window.history.length,
  //         location: window.location.href,
  //         referrer: document.referrer,
  //         hardwareConcurrency: window.navigator.hardwareConcurrency,
  //     },
  
  //     account: {
  //         id: 'deployed',
  //         accountName: 'deployed',
  //     }
  // });
  // })
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
