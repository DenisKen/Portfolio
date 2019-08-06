import React from 'react';
import './Project.css'


const project = (props) => {

    return (
        <div className="Project-Content" style={{marginTop: props.marginTop}}>
            <picture className="Project-Picture">
                <img src={props.image} alt={props.alt}/>
                <div className="Project-Picture--TextLabel"> WIRL </div>
            </picture>
            
        </div>
    )
}
export default project;