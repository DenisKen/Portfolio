import React, {Component} from 'react';
import './HUD_Html.css';

import HUD_ViewItem from './HUD_ViewItem';



class HUD_Html extends Component {

    styleInteract = {
        pointerEvents: 'none'
    }
    constructor(props){
        super(props);   
        
    }
    teste = (text) =>{
        console.log(text);
    }

    changeSubtitle = () =>{
        console.log("changed subtitle");
    }
    render(props){
        return(
            <div  style={this.styleInteract} className="HUD_Html-Content">
                {this.props.teste}
                <HUD_ViewItem/>
                <div className="HUD_Html-Subtitle">
                    <p> {this.props.text} </p>
                </div>
            </div>
        )
    }
}

export default HUD_Html;