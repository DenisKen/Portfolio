import * as THREE from 'three';

import mouseSelector from '../HUD/mouseSelector.png';
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

        var textureLoader = THREE.TextureLoader();
        textureLoader.load(mouseSelector, (textureLoader) =>{
            var spriteMain_Material = new THREE.SpriteMaterial( { map: textureLoader} );
            spriteMain_Material.transparent = true;
            var spriteMain = new THREE.Sprite( spriteMain_Material );
            spriteMain.scale.x = 50;
            spriteMain.scale.y = 50;
            spriteMain.scale.z = 50;
            spriteMain.position.z = -200;
            this.scene.add( spriteMain );
        });
        
    }

    loadSprite = (sprite) =>{
        

    }
    //cria variaveis
    
    render = () =>{
        //this.renderer.render(this.scene, this.camera);
    }
}

export default HUD_ThreeJS;