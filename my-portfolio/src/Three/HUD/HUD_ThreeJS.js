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

        var spriteMap = new THREE.TextureLoader().load(mouseSelector);
        var spriteMaterial = new THREE.SpriteMaterial( { map: spriteMap} );
        spriteMaterial.transparent = true;
        var sprite = new THREE.Sprite( spriteMaterial );
        sprite.scale.x = 50;
        sprite.scale.y = 50;
        sprite.scale.z = 50;
        sprite.position.z = -200;
        this.scene.add( sprite );
    }
    //cria variaveis
    
    render = () =>{
        //this.renderer.render(this.scene, this.camera);
    }
}

export default HUD_ThreeJS;