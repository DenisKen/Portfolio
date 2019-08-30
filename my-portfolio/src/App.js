import React,{Component} from 'react';

import 'normalize.css';
import './App.css';

import HUD_Html from './HUD/Html/HUD_Html.js';
import Joystick from './Three/Controllers/Joystick';
import SceneManager from './Three/SceneManager';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import Contact from './Contact/Contact';

<<<<<<< HEAD
class App extends Component {
  render(){
    return (
      <div className="App">
          <Joystick ref="joystick"/>
          <SceneManager ref="sceneManager"/>
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
          <Contact/>
      </div>
    );
  }

  componentDidMount(){
    this.refs.joystick.test(this.refs.sceneManager);
  }
=======
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
>>>>>>> ab20286fb2cd3e8babadf6b112a8fee775c5fb6c
}

export default App;