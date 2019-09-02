import React, {Component} from 'react';
import {MobileView, isMobile} from 'react-device-detect';

import photo1 from './Images/1.png';
import photo2 from './Images/2.png';
import photo3 from './Images/3.png';

import arrom_left from './Images/Arrow_left.png';
import arrom_right from './Images/Arrow_right.png';

class HUD_ViewItem extends Component {

    leftArrow = {
        visibility: 'hidden'
    }
    rightArrow = {
        visibility: 'hidden'
    }

    constructor(props){
        super(props);

        this.state = {
            image: null
        }

        this.images = {
            photo1: photo1,
            photo2: photo2
        }

        this.imagesToShow = [];
        this.index = 0;
    }
    
    enableViewItem(imagesNames){
        //here we enable PointerEvents and SetVisible the HUD

        //We get images names and put in a array to show them.
        for (let i = 0; i < imagesNames.length; i++) {
            this.imagesToShow.push(this.images[imagesNames[i]]);
        }
        //Set first image and show it.
        this.setState({
            image: this.images[this.imagesToShow[0]]
        })

        //VerifyArrows
        if (this.hasPreviousImage())
            this.enableArrowLeft();
        
        if (this.hasNextImage())
            this.enableArrowRight();
        
        
    }
    disableViewItem(){

    }

    hasPreviousImage(){
        
    }
  
    hasNextImage(){
        if (this.index == this.imagesToShow.length)
            return true;
        return false;
    }

    clickArrowLeft(){
        
        this.index -= 1;

    }
    clickArrowRight(){

        this.index += 1;
        //Change image (index and set)
    }

    enableArrowLeft(){
        
    }
    enableArrowRight(){

    }
    
    render(){

        const portrait = <div className="HUD_Html-ViewItem">
                    <img  src={photo1}/>
                    <div className="HUD_Html-ViewItem--Arrow" >
                        <img className="HUD_Html-ViewItem--Arrow-Left" src={arrom_left}/>
                        <img className="HUD_Html-ViewItem--Arrow-Right" src={arrom_right}/>
                    </div>
                </div>;

        const landscape = <div className="HUD_Html-ViewItem--Content HUD_Html-ViewItem--Landscape">
                    <input className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Left" type="image" src={arrom_left}/>
                    <img className="HUD_Html-ViewItem--MainImage" src={this.state.image}/>
                    <img className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Right" src={arrom_right}/>
                </div>;
                
        return(
            <div className="HUD_Html-ViewItem--Content">
            {isMobile ? portrait : landscape}
            </div>
        )
    }
}

export default HUD_ViewItem;