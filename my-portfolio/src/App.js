import React from 'react';

import 'normalize.css';
import './App.css';

import HUD_Html from './HUD/Html/HUD_Html.js';
import Joystick from './Three/Controllers/Joystick';
import SceneManager from './Three/SceneManager';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
        <HUD_Html/>
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