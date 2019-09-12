import * as THREE from 'three';
import interactionData from '../../InteractionData';

import mouseSelector from '../HUD/mouseSelector.png';

class InteractionOption {
    
    constructor(){

        this.scene = null;
        this.textureLoader = new THREE.TextureLoader();

        this.spriteMain = null;
        this.spriteName = null;

        this.spriteOption = null;

        //UP, DOWN, RIGHT, LEFT
        this.spriteInteractions = [];

        
    }

    create = (scene) =>{

        this.scene = scene;
        
        //CREATE ARROW
        this.textureLoader.load(mouseSelector, (textureLoader) =>{
            var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
            spriteMaterial.transparent = true;
            this.spriteMain = new THREE.Sprite( spriteMaterial );
            this.spriteMain.scale.x = 50;
            this.spriteMain.scale.y = 50;
            this.spriteMain.scale.z = 50;
            this.spriteMain.position.z = -200;
            this.scene.add(this.spriteMain );

            this.textureLoader.load(mouseSelector, (textureLoader) =>{
                var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                spriteMaterial.transparent = true;
                this.spriteName = new THREE.Sprite( spriteMaterial );
                this.spriteName.scale.x = 1;
                this.spriteName.scale.y = 1;
                this.spriteName.scale.z = 1;
                this.spriteName.position.y = 1;
                this.spriteName.position.z = 0;
                window.spriteteste = this.spriteName;
                this.scene.add( this.spriteName );
                this.spriteMain.add(this.spriteName);
            });

            //ACTIVE    WHEN YOU ARE NEARLY OF OBJCTEC 
            //Made Options
            this.textureLoader.load(mouseSelector, (textureLoader) =>{
                var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                spriteMaterial.transparent = true;
                this.spriteOption = new THREE.Sprite( spriteMaterial );
                this.spriteOption.scale.x = 0.4;
                this.spriteOption.scale.y = 0.4;
                this.spriteOption.scale.z = 0.4;
                this.spriteOption.position.y = 1;
                this.spriteOption.position.z = 0;
                    

                this.scene.add( this.spriteOption );
                this.spriteMain.add(this.spriteOption);

                this.spriteOption.visible = true;
            });

            console.log(interactionData.interactionHUD);
            for (let i = 0; i < interactionData.getAllItems().length; i++) {
                let name = interactionData.getAllItems()[i];
                console.log(interactionData.interactionHUD[name]);
                let tempImage = null;
                //Verify view
                if (interactionData.interactionHUD[name]["view"]){
                    console.log("Create View");
                }
                if (interactionData.interactionHUD[name]["lookAt"]){
                    console.log("Create Look");
                }
                if (interactionData.interactionHUD[name]["animation"]){
                    console.log("Create Animation");
                }
            }
        });
    }
    
}

export default InteractionOption;