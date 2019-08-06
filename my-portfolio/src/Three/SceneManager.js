//First of all we need to create the React component that will host the canvas and the Three.js application.
import React, {Component} from 'react';
import * as THREE from 'three';
import * as FBXLoader from 'three-fbx-loader';

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
        var loader = new FBXLoader();
        console.log(loader);
        var texture = new THREE.TextureLoader().load("./Three/Models/Ali/diffuse_01.png");
        loader.load('./Three/Models/Ali/Ali.fbx', function (object3d) {
            object3d.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
            
                    // apply texture
                    child.material.map = texture
                    child.material.needsUpdate = true;
                }
            });
            scene.add(object3d);
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