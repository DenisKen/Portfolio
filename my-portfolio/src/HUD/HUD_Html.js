import React, {Component} from 'react';
import './HUD_Html.css';

import HUD_ViewItem from './HUD_ViewItem';



class HUD_Html extends Component {

    styleInteract = {
        pointerEvents: 'none'
    }
    render(){
        return(
            <div style={this.styleInteract} className="HUD_Html-Content">
                <HUD_ViewItem/>
                <div className="HUD_Html-Subtitle">
                    <p> {this.props.text} </p>
                </div>
            </div>
        )
    }
}

export default HUD_Html;