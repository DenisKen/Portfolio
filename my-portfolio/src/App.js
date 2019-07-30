import React from 'react';
import './App.css';
import SceneManager from './Three/SceneManager';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';


function App() {
  return (
    <div className="App">
        <SceneManager/>
        <AboutMe/>
        <MyProjects/>
    </div>
  );
}

export default App;
