//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as OrbitControls from 'three-orbitcontrols';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, BokehEffect } from "postprocessing";

import {MobileView} from 'react-device-detect';

import Joystick from './Controllers/Joystick';
import HUD_Html from '../HUD/HUD_Html';
import HUD_ThreeJS from './HUD/HUD_ThreeJS';

import InteractionData from '../InteractionData';

import Sound from './Sounds/Sound_Manager';
import track_1 from './Sounds/Tracks/SantaMonicaDream.mp3';

import voice_1 from './Sounds/Voices/blah-blah-blah.wav';



class SceneManager extends Component{
    
    constructor(props){
      super(props);

      this.state = {
          showHUD: false,
          subtitle: "Teste"
      } 

      this.scene = null;
      this.renderer = null;
      this.camera = null;

      this.clock = null;
      this.deltaTime = 0;

      this.player = null;
      this.direction = {};

      this.currentVoiceData = [];
      this.subtitle = "Teste";
      this.pause = false;

      //SHADER CAMERA 
      this.composer = null;
      this.effectPass = null;
      //
      //Audio
      this.audioLoader = null;
      this.soundTrack = null;
      this.soundVoice = null;
      this.voicesSaved = {
        gP_1: voice_1
      }

      this.hud3D = null;
      
    }
    playAudio = (type, soundPath) => {

      this.audioLoader.load(soundPath, ( buffer ) => {
        if (type == "track"){
          this.soundTrack.setBuffer( buffer );
          this.soundTrack.setLoop( true );
          this.soundTrack.setVolume(0.5);
          this.soundTrack.play();
        }
        else if (type == "voice"){
          if (this.soundVoice.isPlaying){
            this.soundVoice.stop();
          }

          this.soundVoice.setBuffer( buffer );
          this.soundVoice.play(); 

          this.soundVoice.source.onended = this.audioEnded;          
        }
        else if (type == "effects"){

        }
        

        //this.soundTrack.setVolume( 0.5 );
        
      });
      

    }
    audioEnded = ()=>{
      //Reset subtitle
      this.subtitle = "";
      this.setState({
        subtitle: this.subtitle
      })
      
    }

    browser_Controller = () =>{
      document.addEventListener("keydown", (event) => {
        var keyCode = event.which;
        //this.teste({text: "TESTE TESTE"});
        if (keyCode == 32) {
          //voices.subtitles["graduationPhotos"]["view"]
          //voices.audios["graduationPhotos"]["view"]
          //this.refs.HUDHtml.refs.HUDViewItem.enableViewItem(["photo1", "photo2","photo3"]);
          this.currentVoiceData = InteractionData["graduationPhotos"]["view"];
          this.playAudio("voice", this.voicesSaved[InteractionData["graduationPhotos"]["view"][0].audioPath]);
          //Play first audio and set first subtitle
          this.setState({
            subtitle: this.currentVoiceData[0].subtitle
          });

          this.refs.HUDHtml.refs.HUDViewItem.enableViewItem( InteractionData.getImages("pc"));
        }
        
        //W
        if (keyCode == 87){
          console.log("W pressed");
          this.player.translateZ(100 *this.deltaTime);
        }
        //A
        if (keyCode == 65){
          console.log("A pressed");
          this.player.translateX(-100 *this.deltaTime);
        }
        //S
        if (keyCode == 83){
          console.log("S pressed");
          this.player.translateZ(-100 *this.deltaTime);
        }
        //D
        if (keyCode == 68){
          console.log("D pressed");
          this.player.translateX(100 *this.deltaTime);
        }

      }, false);
    }
    componentDidMount() { 
     



      //>>
      this.clock = new THREE.Clock();

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );
      
      this.renderer = new THREE.WebGLRenderer();

      
      //SHADER
      this.composer = new EffectComposer(new THREE.WebGLRenderer());
      this.effectPass = new EffectPass(this.camera, new BokehEffect());
      this.effectPass.renderToScreen = true;
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.composer.addPass(this.effectPass);
      //
      
      //Audio
      //
      var listener = new THREE.AudioListener();
      

      this.soundTrack = new THREE.Audio(listener);
      this.soundVoice = new THREE.Audio(listener);
      
      this.audioLoader = new THREE.AudioLoader(); 
      
      //this.playAudio("track", track_1);

      this.camera.add(listener);
      
      

      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.renderer.autoClear = false;
      this.scene.background = new THREE.Color( 0x232323 );

      this.browser_Controller();
      
      


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

      var room;

      let gltfLoader = new GLTFLoader();
      gltfLoader.load('/Models/Room/Sketchfabroomtest.gltf', (gltf ) => {
        
          console.log("Model Lodaded >>>>>>>>>>>>>>>>>>>");
          this.scene.add(gltf.scene);
         
          gltf.scene.position.y = -365;
          gltf.scene.scale.x = 120;
          gltf.scene.scale.y = 120;
          gltf.scene.scale.z = 120;
      },
      ( xhr ) => {
          // called while loading is progressing
          console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
      },
      ( error ) => {
          // called when loading has errors
          console.error( 'An error happened', error );
      });
      const controls = new OrbitControls(this.camera, this.renderer.domElement)
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      
      
      
      loader.load('/Models/LifeStrange/Chloe.fbx', (object3d) => {

        
        this.player = object3d;
        var vector = new THREE.Vector3( this.player.position.x -100,this.player.position.y, this.player.position.z );
        controls.target = vector; 
        
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
      
      window.addEventListener( 'resize', this.onWindowResize, false );

      

      //HUD 3D
      this.hud3D = new HUD_ThreeJS(this.renderer,this.scene);
      this.hud3D.init();
      
      
      this.update();
    }

    onWindowResize = () =>{
      
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );

    }
    update = () => {   
      this.deltaTime = this.clock.getDelta();

      if (this.pause == true)
        return;

      //this.player.position.add( vector );
      //this.player.rotation.applyQuaternion( this.camera.quaternion );
      
      this.composer.render(this.deltaTime);
      
      this.renderer.render( this.scene, this.camera );
      this.hud3D.render();

      //Player
      //Movement
      if (this.direction){
        if (this.direction.x == "right")
          this.player.position.x += 1;
      }
      
      //Shader camera
      
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

      setAudioAndSubtitle = (audio, newSubtitle) =>{
        this.setState({
          subtitle: newSubtitle
        })
      }
      callBackViewItem_ChangedImage = (index)=>{
        //Change subtitle here
        this.setAudioAndSubtitle(0, this.currentVoiceData[index].subtitle);
        //Play Sound here if have
        this.playAudio("voice", this.voicesSaved[InteractionData["graduationPhotos"]["view"][index].audioPath]);
        
      }
      callBackViewItem_Close = () =>{
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