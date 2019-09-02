//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

import {MobileView} from 'react-device-detect';
import Joystick from './Controllers/Joystick';
import HUD_Html from '../HUD/HUD_Html';

class SceneManager extends Component{

    constructor(props){
      super(props);

      this.state = {
          showHUD: false,
          subtitle: "Now I have to print this fast and get the hell out of here..."
      } 

      this.scene = null;
      this.joystickX = 0;

      this.player = null;
      this.direction = {};
      this.subtitle = "Now I have to print this fast and get the hell out of here... ";
     
    }
    
    componentDidMount() {

        this.scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.autoClear = false;
        this.scene.background = new THREE.Color( 0xffffff );

        
        
        document.addEventListener("keydown", (event) => {
          var keyCode = event.which;
          console.log(this.subtitle);
          this.setState({
              subtitle: "Teste dois"
          })
          
          this.subtitle= "Denis kEN GOSTOSO";
          //this.teste({text: "TESTE TESTE"});
          //console.log("aksodaksopk");
          if (keyCode == 87) {
              
          }
        }, false);


        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
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
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = true;
        
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
          camera.position.z = 500;
          camera.position.x = 300;
          camera.position.y = 100;

          this.player.position.y = -250;
          this.player.rotation.y = 0.785398;
        });

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        const animate = () => {   
          //clearRect();
          renderer.render( this.scene, camera );


          //Player
          //Movement
          if (this.direction){
            if (this.direction.x == "right")
              this.player.position.x += 1;
          }

          requestAnimationFrame( animate ); 

        };
        animate();
      }

      

      render() {
        return (
          <div ref={ref => (this.mount = ref)}>
            <MobileView>
              <Joystick
                onMove={this.joystick_Controller}
                onEnd={this.joystick_Out}
              />
            </MobileView>
            <HUD_Html
              showHUD={this.state.showHUD}
              text={this.state.subtitle} 
            />
          </div>
        )
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