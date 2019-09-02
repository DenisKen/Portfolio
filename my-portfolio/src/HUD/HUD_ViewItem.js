import React, {Component} from 'react';
import {MobileView, isMobile} from 'react-device-detect';

import photo1 from './Images/1.png';
import photo2 from './Images/2.png';
import photo3 from './Images/3.png';

import arrom_left from './Images/Arrow_left.png';
import arrom_right from './Images/Arrow_right.png';

class HUD_Html extends Component {

    style = {
        width: '100%',
        height: '100%'
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
                    <img className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Left" src={arrom_left}/>
                    <img className="HUD_Html-ViewItem--MainImage" src={photo1}/>
                    <img className="HUD_Html-ViewItem--Arrow HUD_Html-ViewItem--Arrow-Right" src={arrom_right}/>
                </div>;
                
        return(
            <div className="HUD_Html-ViewItem--Content">
            {isMobile ? portrait : landscape}
            </div>
        )
    }
}

export default HUD_Html;