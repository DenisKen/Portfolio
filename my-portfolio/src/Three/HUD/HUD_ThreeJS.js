import * as THREE from 'three';
import InteractionData from '../../InteractionData';

import mouseSelector from '../HUD/mouseSelector.png';
import interactionData from '../../InteractionData';

import InteractionOption from './InteractionOption';
class HUD_ThreeJS{

    constructor(scene){        
    
        this.scene = scene;

    }
    
    //Init all sprites objects
    init = ()=>{


        var interactionOption = new InteractionOption();
        interactionOption.create(this.scene);
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