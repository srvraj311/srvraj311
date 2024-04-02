"use client";
import React, { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experiences from "./Experiences/Experiences";
import DarkModeToggle from "./DarkModeToggle";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation";

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Profile />
    <Skills />
    <Experiences />
    <Projects />
    <Footer />
    <Navigation />
    </div>
  );
}

export default App;
