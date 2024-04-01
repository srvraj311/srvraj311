import React from 'react';
import './App.css';
import Greeting from "./Greeting/Greeting";
import Profile from './Profile/Profile';
import Skills from './Skills/Skills';

function App() {

  return (
    <div className="App">
      <Profile/>
      <Skills />
    </div>
  );
}

export default App;
