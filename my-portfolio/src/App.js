import React,{Component} from 'react';

import 'normalize.css';
import './App.css';

import Joystick from './Three/Controllers/Joystick';
import SceneManager from './Three/SceneManager';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import Contact from './Contact/Contact';

class App extends Component {

  render(){
    return (
      <div className="App">
          { /* <Joystick joystickMovement={this.joystickMovement} onEnd={this.joystick_EndMovement} ref="joystick"/> */}
          {/*<SceneManager ref="sceneManager"/>*/}
          <AboutMe/>
          <MySkills/>
          <MyProjects/>
          <Contact/>
      </div>
    );
  }

  componentDidMount(){
    //this.refs.joystick.test(this.refs.sceneManager);
  }

  joystickMovement = (movement) =>{
      console.log("Movement ",movement);
      var x = 1;
      console.log(this.hud_Html.props.test = 1);
  }
  
  joystick_EndMovement(data){
    console.log("Data ", data);
  }
}

export default App;