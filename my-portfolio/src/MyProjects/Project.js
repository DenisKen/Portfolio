import React from 'react';
import './Project.css'


const project = (props) => {

    return (
        <div className="Project" style={{marginTop: props.marginTop}}>
            <picture className="Picture">
                <img src={props.image} alt={props.alt}/>
                <div className="Picture--TextLabel"> WIRL </div>
            </picture>
            
        </div>
    )
}
export default project;