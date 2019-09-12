import * as THREE from 'three';
import InteractionData from '../../InteractionData';

import mouseSelector from '../HUD/mouseSelector.png';
import interactionData from '../../InteractionData';
class HUD_ThreeJS{

    constructor(renderer,scene){        
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 10000 );;
        this.scene = scene;
        this.renderer = renderer;

    }
    
    //Init all sprites objects
    init = ()=>{

        //Composto por
        //Sprite seta
        //Sprite nome objeto
        //---When in ranged of choice
        //Sprite Background Choice
        //Sprite Options (View, Get, etc)
        
        
    }

    loadSprite = (sprite) =>{
        

    }
    //cria variaveis
    
    render = () =>{
        //this.renderer.render(this.scene, this.camera);
    }
}

export default HUD_ThreeJS;