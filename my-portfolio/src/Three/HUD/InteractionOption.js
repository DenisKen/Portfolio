import * as THREE from 'three';
import interactionData from '../../InteractionData';

import arrow from '../HUD/Images/arrow.png';
import name from '../HUD/Images/name.png';
import click from '../HUD/Images/click.png';
import touch from '../HUD/Images/touch.png';

import anim from '../HUD/Images/anim.png';
import look from '../HUD/Images/look.png';
import view from '../HUD/Images/view.png';
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

    
    create = (scene, objectName) =>{

        this.scene = scene;
        
        //CREATE ARROW
        this.textureLoader.load(arrow, (textureLoader) =>{
            var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
            spriteMaterial.transparent = true;
            this.spriteMain = new THREE.Sprite( spriteMaterial );
            this.spriteMain.scale.set(50,50,50);
            this.spriteMain.position.z = -200;
            this.scene.add(this.spriteMain );

        

            //NAME
            this.textureLoader.load(name, (textureLoader) =>{
                var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                spriteMaterial.transparent = true;
                this.spriteName = new THREE.Sprite( spriteMaterial );
                this.spriteName.position.y = 0.5;
                this.spriteName.position.z = 0;
                window.spriteteste = this.spriteName;
                this.scene.add( this.spriteName );
                this.spriteMain.add(this.spriteName);
            });

            //ACTIVE    WHEN YOU ARE NEARLY OF OBJCTEC 
            //Made Options
            this.textureLoader.load(touch, (textureLoader) =>{
                var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                spriteMaterial.transparent = true;
                this.spriteOption = new THREE.Sprite( spriteMaterial );
                this.spriteOption.scale.set(0.4,0.4,0.4);
                this.spriteOption.position.y = 0;
                this.spriteOption.position.z = 0;
                    

                this.scene.add( this.spriteOption );
                this.spriteName.add(this.spriteOption);

                this.spriteOption.visible = true;

            });
                //Verify view
            if (interactionData.interactionHUD[objectName]["view"]){
                this.textureLoader.load(view, (textureLoader) =>{
                    var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                    spriteMaterial.transparent = true;
                    var tempSprite = new THREE.Sprite( spriteMaterial );
                    tempSprite.scale.set(1.6,1.6,1.6);
                    tempSprite.position.y = 2;
                    tempSprite.position.z = 0;
                        
    
                    this.scene.add( tempSprite );
                    this.spriteOption.add(tempSprite);    
                });
            }
            if (interactionData.interactionHUD[objectName]["lookAt"]){
                this.textureLoader.load(look, (textureLoader) =>{
                    var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                    spriteMaterial.transparent = true;
                    var tempSprite = new THREE.Sprite( spriteMaterial );

                    tempSprite.scale.set(1.6,1.6,1.6);
                    tempSprite.position.y = 0;
                    tempSprite.position.x = 2;
                    tempSprite.position.z = 0;
                        
    
                    this.scene.add( tempSprite );
                    this.spriteOption.add(tempSprite);    
                });
            }
            if (interactionData.interactionHUD[objectName]["animation"]){

                this.textureLoader.load(anim, (textureLoader) =>{
                    var spriteMaterial = new THREE.SpriteMaterial( { map: textureLoader} );
                    spriteMaterial.transparent = true;
                    var tempSprite = new THREE.Sprite( spriteMaterial );
                    tempSprite.scale.set(1.6,1.6,1.6);
                    tempSprite.position.y = 0;
                    tempSprite.position.x = -2;
                    tempSprite.position.z = 0;
                        
    
                    this.scene.add( tempSprite );
                    this.spriteOption.add(tempSprite);    
                });
            }
        });
    }
    
    getInteractionOption = () =>{
        return this.spriteMain;
    }

    activate = () =>{
        
    }
    desaticvate = () =>{
        
    }
}

export default InteractionOption;