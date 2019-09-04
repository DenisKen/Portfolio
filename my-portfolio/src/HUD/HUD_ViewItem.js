import React, {Component} from 'react';
import {MobileView, isMobile} from 'react-device-detect';

import photo1 from './Images/Formatura_1.jpg';
import photo2 from './Images/Formatura_2.jpg';
import photo3 from './Images/3.png';

import arrom_left from './Images/arrow_left.png';
import arrom_right from './Images/arrow_right.png';

import close from './Images/Close.png';


class HUD_ViewItem extends Component {
    constructor(props){
        super(props);

        this.callBackChangedImage = this.props.callBackViewItem_ChangedImage;
        this.callBackClose = this.props.callBackViewItem_Close;

        this.state = {
            mainImage: null,
            pointerEvents: 'none',
            showHUD: 'hidden',
            leftArrow_Enabled: 'hidden',
            rightArrow_Enabled: 'hidden'
        }

        this.images = {
            photo1: photo1,
            photo2: photo2,
            photo3: photo3
        }
        
        this.imagesToShow = [];
        this.index = 0;
    }
    
    enableViewItem = (imagesNames) =>{
        //Reset all
        this.imagesToShow = [];
        this.index = 0;
        
        //We get images names and put in a array to show them.
        for (let i = 0; i < imagesNames.length; i++) {
            this.imagesToShow.push(this.images[imagesNames[i]]);
        }
        //Set first image and show it.
        this.setState ({
            mainImage: this.imagesToShow[0],
            pointerEvents: 'all',
            showHUD: 'visible',
            leftArrow_Enabled: 'hidden',
            rightArrow_Enabled: 'hidden'
        })

        //VerifyArrows
        if (this.hasLeftImage())
            this.enableArrowLeft(true);
        
        if (this.hasRightImage()){
            this.enableArrowRight(true);
        }
        
        
    }
    disableViewItem = () =>{

    }

    hasLeftImage = () =>{
        if (this.index > 0)
            return true;
        
        return false;
    }
  
    hasRightImage = () =>{
        if (this.index < this.imagesToShow.length -1)
            return true;
        
        return false;
    }

    clickArromLeft = () =>{
        
        this.index -= 1;
    
        this.changeImage();
    }
    clickArrowRight = () =>{
        
        this.index += 1;

        this.changeImage();
    }
    clickClose = (props) =>{
        this.setState({
            pointerEvents: 'none',
            showHUD: 'hidden',
            leftArrow_Enabled: 'hidden',
            rightArrow_Enabled: 'hidden'
        })

        this.callBackClose();
    }

    changeImage = () =>{
        this.setState({
            mainImage: this.imagesToShow[this.index]
        })

        //VerifyArrows
        if (this.hasLeftImage())
            this.enableArrowLeft(true);
        else
            this.enableArrowLeft(false);

        if (this.hasRightImage())
            this.enableArrowRight(true);
        else
            this.enableArrowRight(false);

        this.callBackChangedImage(this.index);
    }
    enableArrowLeft = (enable) =>{

        let value = 'hidden';
        if (enable)
            value = 'visible'; 

        this.setState({
            leftArrow_Enabled: value
        })
    }
    enableArrowRight = (enable) =>{

        let value = 'hidden';
        if (enable)
            value = 'visible'; 

        this.setState({
            rightArrow_Enabled: value
        })
    }
    
    render(props){
        
        const portrait = <div className="HUD_Html-ViewItem">
                    <img  src={photo1}/>
                    <div className="HUD_Html-ViewItem--Arrow" >
                        <img className="HUD_Html-ViewItem--Arrow-Left" src={arrom_left}/>
                        <img className="HUD_Html-ViewItem--Arrow-Right" src={arrom_right}/>
                    </div>
                </div>;

        const landscape = <div style={{visibility: this.state.showHUD}} className="HUD_Html-ViewItem--Content HUD_Html-ViewItem--Landscape">
                    <input 
                        className="HUD_Html-ViewItem--Close" 
                        src={close}
                        type="image"     
                        onClick={this.clickClose}
                        draggable={false}
                    />
                    <input 
                        style={ 
                            {visibility: this.state.leftArrow_Enabled}
                        }
                        className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Left" 
                        type="image" 
                        src={arrom_left}
                        onClick={this.clickArromLeft}
                        draggable={false}
                       
                    />
                    <div>
                    <img draggable={false} className="HUD_Html-ViewItem--MainImage" src={this.state.mainImage}/>
                    </div>
                    <input
                        style={ 
                            {visibility: this.state.rightArrow_Enabled}
                        }
                        className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Right" 
                        type="image" 
                        src={arrom_right}
                        onClick={this.clickArrowRight}
                        draggable={false}
                    />
                    
                </div>;
                
        return(
            <div  style={{pointerEvents: this.state.pointerEvents}} className="HUD_Html-ViewItem--Content">
            {isMobile ? portrait : landscape}
            </div>
        )
    }
}

export default HUD_ViewItem;