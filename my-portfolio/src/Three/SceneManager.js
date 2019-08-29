//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';



class SceneManager extends Component{

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 500;
        camera.position.y = 100;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        scene.background = new THREE.Color( 0xffffff );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        this.mount.setAttribute("class", "Three-Canvas3D Global-Background");
        var light = new THREE.AmbientLight( 0x404040); // soft white light
        scene.add( light );
        let loader = new FBXLoader();

        var model;
        loader.load('/Models/Ali/Ali.fbx', (object3d) => {

          
            model = object3d;
            console.log(camera.position);
            
            scene.add(object3d);
          
            console.log("Model Lodaded >>>>>>>>>>>>>>>>>>>>>>");
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

          if (model)
            model.rotation.y += 0.0225;
        };
        animate();
      }
      render() {
        return (
          <div ref={ref => (this.mount = ref)} />
        )
      }
}

export default SceneManager;