import React, {Component} from 'react';

import * as THREE from 'three';

class HUD_3D extends Component{

    componentDidMount(){

        //HUD 2D >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        const hudCanvas = document.createElement('canvas');

        //Set dimensions
        hudCanvas.width = window.innerWidth;
        hudCanvas.height = window.innerHeight;
        //Set 2D Context
        var hudBitmap = hudCanvas.getContext('2d');
        hudBitmap.font = "Normal 40px Arial";
        hudBitmap.textAlign = 'center';
        hudBitmap.fillStyle = "rgba(245,245,245,0.75)";
        hudBitmap.fillText('Initializing...', window.innerWidth / 2, window.innerWidth / 2);

        // Create the camera and set the viewport to match the screen dimensions.
        const camera = new THREE.OrthographicCamera(-window.innerWidth/2, window.innerWidth/2, window.innerHeight/2, -window.innerHeight/2, 0, 1000 );
        // Create also a custom scene for HUD.
        const scene = new THREE.Scene();

        var hudTexture = new THREE.Texture(hudCanvas) 
        hudTexture.needsUpdate = true;
         // Create HUD material.
        var material = new THREE.MeshBasicMaterial( {map: hudTexture} );
        material.transparent = true;

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    }
    
    clearRect(){
        hudBitmap.clearRect(0, 0, window.innerWidth, window.innerHeight);
        hudTexture.needsUpdate = true;
        //hudBitmap.fillText("AAAAAAAAAAAAAA DENIS GOSTOSO", window.innerWidth / 2, window.innerHeight / 2);
    }
    update(){

    }
    render() {
        return (
          <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default HUD_3D;