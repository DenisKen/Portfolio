//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';

class SceneManager extends Component{

    componentDidMount() {

        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );
        
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        scene.background = new THREE.Color( 0xffffff );


        
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        this.mount.setAttribute("class", "Three-Canvas3D Global-Background");

        var light = new THREE.AmbientLight( 0x404040, 3); // soft white light
        scene.add( light );
        
        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        directionalLight.position.z = -400;
        directionalLight.position.y = 500;
        scene.add( directionalLight );


        let loader = new FBXLoader();

        var model;
        loader.load('/Models/Room/Floor.fbx', (object3d) => {

          
            model = object3d;
            console.log(camera.position);
            
            scene.add(object3d);
          
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


        var cube;
        loader.load('/Models/Room/Cube.fbx', (object3d) => {

          
          cube = object3d;
          controls.target = cube.position; 
          console.log(camera.position);
          
          scene.add(object3d);
        
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

          cube.position.y = -250;
          cube.rotation.y = 0.785398;
        });
        
        

        window.addEventListener( 'resize', onWindowResize, false );

        function onWindowResize(){

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        var animate = function () {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
          
        };
        animate();
      }

      movement(){
        
      }

      render() {
        return (
          <div ref={ref => (this.mount = ref)} />
        )
      }
}

export default SceneManager;