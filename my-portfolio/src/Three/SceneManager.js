//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as FBXLoader from 'three-fbxloader-offical';
import * as THREE from 'three';


class SceneManager extends Component{

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        scene.background = new THREE.Color( 0xfafafa );
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild( renderer.domElement );
        this.mount.setAttribute("class", "Three-Canvas3D Global-Background");
        var light = new THREE.AmbientLight( 0x404040 ); // soft white light
        scene.add( light );
        let loader = new FBXLoader();

        loader.load('./Models/Robot/Robot.fbx', (object3d) => {

            scene.add(object3d);
            console.log("Model Lodaded >>>>>>>>>>>>>>>>>>>>>>");
        });
       
        camera.position.z = 0;
        
        var animate = function () {
          requestAnimationFrame( animate );
          renderer.render( scene, camera );
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