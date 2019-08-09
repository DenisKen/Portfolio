import React from 'react';
import './Project.css'


const project = (props) => {

    return (
        <div className="Project-Content" style={{marginTop: props.marginTop}}>
            <div className="Project-Picture">
                <div>
                    <div className="Project-Picture--Active">
                        <img src={props.gif} alt={props.alt}/>
                    </div>
                    <img className="Project-Picture--Static" src={props.image} alt={props.alt}/>
                </div>
            </div>
            <div className="Project-Picture--TextLabel"> {props.subtitle} </div>
        </div>
    )
}
export default project;