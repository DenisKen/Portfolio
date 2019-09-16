import * as THREE from 'three';
import InteractionData from '../../InteractionData';

import mouseSelector from '../HUD/mouseSelector.png';
import interactionData from '../../InteractionData';

import InteractionOption from './InteractionOption';
class HUD_ThreeJS{

    constructor(scene, camera){        

        this.interactionOptionsArray = [];
        this.scene = scene;
        this.camera = camera;
    }
    
    //Init all sprites objects
    init = ()=>{

        for (let i = 0; i < 1; i++) {
            let objectName = interactionData.getAllItems()[i];
            var tempInteractionOption = new InteractionOption();
            tempInteractionOption.create(this.scene, objectName);

            this.interactionOptionsArray[i] = tempInteractionOption;
        }
        
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
    
    update = () => {

        //this.renderer.render(this.scene, this.camera);
    }
}

export default HUD_ThreeJS;