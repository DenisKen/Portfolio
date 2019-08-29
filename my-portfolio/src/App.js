import React from 'react';

import 'normalize.css';
import './App.css';

import SceneManager from './Three/SceneManager';
import Joystick from './Three/Controllers/Joystick';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
        <Joystick/>
        <SceneManager/>
        <AboutMe/>
        <MySkills/>
        <MyProjects/>
        <Contact/>
    </div>
  );
}

export default App;