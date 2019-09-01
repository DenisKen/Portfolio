import React, {Component} from 'react';

import photo1 from './Images/1.png';
import photo2 from './Images/2.png';
import photo3 from './Images/3.png';

import arrom_left from './Images/Arrow_left.png';
import arrom_right from './Images/Arrow_right.png';

class HUD_Html extends Component {

    render(){
        return(
            <div className="HUD_Html-ViewItem">
                <img  src={photo1}/>
                <div className="HUD_Html-ViewItem--Arrow" >
                    <img src={arrom_left}/>
                    <img src={arrom_right}/>
                </div>
            </div>
        )
    }
}

export default HUD_Html;