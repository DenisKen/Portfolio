//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

import {MobileView} from 'react-device-detect';
import Joystick from './Controllers/Joystick';
import HUD_Html from '../HUD/HUD_Html';
import Teste from '../HUD/teste';
import { LinearMipMapNearestFilter } from 'three';
import VoicesData from '../VoicesData';


class SceneManager extends Component{
    
    constructor(props){
      super(props);

      this.state = {
          showHUD: false,
          subtitle: "Now I have to print this fast and get the hell out of here..."
      } 

      this.scene = null;
      this.renderer = null;
      this.camera = null;

      this.joystickX = 0;

      this.player = null;
      this.direction = {};
      this.subtitle = "Now I have to print this fast and get the hell out of here... ";
      
      this.pause = false;

      //Audio
      this.sound = null;
    }
    
    componentDidMount() { 

      
      console.log(VoicesData);

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );
      
      this.renderer = new THREE.WebGLRenderer();

      //Audio
      //
      var listener = new THREE.AudioListener();
      this.camera.add(listener);

      var sound = new THREE.Audio(listener);
      var audioLoader = new THREE.AudioLoader();
      

      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.autoClear = false;
      this.scene.background = new THREE.Color( 0x232323 );

      
      
      document.addEventListener("keydown", (event) => {
        var keyCode = event.which;
        //this.teste({text: "TESTE TESTE"});
        console.log(keyCode);
        if (keyCode == 65) {
          //voices.subtitles["graduationPhotos"]["view"]
          //voices.audios["graduationPhotos"]["view"]
          this.refs.HUDHtml.refs.HUDViewItem.enableViewItem(["photo1", "photo2","photo3"]);
        }
        if (keyCode == 66){
          this.setState({
            subtitle: ""
          });
        }
      }, false);


      // document.body.appendChild( renderer.domElement );
      // use ref as a mount point of the Three.js scene instead of the document.body
      this.mount.appendChild( this.renderer.domElement );
      this.mount.setAttribute("class", "Three-Canvas3D Global-Background");

      var light = new THREE.AmbientLight( 0x404040, 3); // soft white light
      this.scene.add( light );
      
      var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
      directionalLight.position.z = -400;
      directionalLight.position.y = 500;
      this.scene.add( directionalLight );

      let loader = new FBXLoader();

      var model;
      loader.load('/Models/Room/Floor.fbx', (object3d) => {

        
          model = object3d;
          
          
          this.scene.add(object3d);
        
          console.log("Model Lodaded >>>>>>>>>>>>>>>>>>>>>>");

          object3d.traverse( function ( child ) {

            if ( child.isMesh ) {

                
                  // switch the material here - you'll need to take the settings from the 
                  //original material, or create your own new settings, something like:
                //child.material.needsUpdate = true;

            }
          })

          model.position.y = -400;
      });
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      
      console.log(controls);
      loader.load('/Models/LifeStrange/Chloe.fbx', (object3d) => {

        
        this.player = object3d;
        controls.target = this.player.position; 
        
        this.scene.add(object3d);
      
        console.log("Model Lodaded >>>>>>>>>>>>>>>>>>>>>>");

        object3d.traverse( function ( child ) {

          if ( child.isMesh ) {
            const material = new THREE.MeshPhongMaterial({
              color: 0xFF0000,    // red (can also use a CSS color string here)
              flatShading: true,
              });
              child.material = material;  
                // switch the material here - you'll need to take the settings from the 
                //original material, or create your own new settings, something like:
              child.material.needsUpdate = true;
          }
        })
        this.camera.position.z = 500;
        this.camera.position.x = 300;
        this.camera.position.y = 100;

        this.player.position.y = -250;
        this.player.rotation.y = 0.785398;
      });

      window.addEventListener( 'resize', onWindowResize, false );

      function onWindowResize(){

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );

      }
      
      this.update();
    }
    update = () => {   
        
      if (this.pause == true)
        return;

      this.renderer.render( this.scene, this.camera );

      //Player
      //Movement
      if (this.direction){
        if (this.direction.x == "right")
          this.player.position.x += 1;
      }

      requestAnimationFrame( this.update ); 
        

    };
      

      render() {
        return (
          <div ref={ref => (this.mount = ref)}>
            <MobileView>
              <Joystick
                onMove={this.joystick_Controller}
                onEnd={this.joystick_Out}
              />
            </MobileView>
            <HUD_Html ref="HUDHtml"
              showHUD={this.state.showHUD}
              text={this.state.subtitle}
              callBackViewItem_ChangedImage={this.callBackViewItem_ChangedImage}
              callBackViewItem_Close={this.callBackViewItem_Close}
            />
          </div>
        )
      }
      callBackViewItem_ChangedImage = (index)=>{
        console.log("CALLBACK BITCH!",index);
      }
      callBackViewItem_Close = () =>{
        console.log("Closed pressed");
        this.pause = false;

        this.update();
      }
      joystick_Controller = (data) => {
          //console.log(data.direction);
          
          this.direction = data.direction;
      }
      joystick_Out = (data) => {
          this.direction = null;
      }
}

export default SceneManager;