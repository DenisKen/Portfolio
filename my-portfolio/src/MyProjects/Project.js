import React from 'react';
import './Project.css'


const project = (props) => {

    return (
        <div className="Content">
            <picture>
                <img src={props.image} alt={props.alt}/>
            </picture>
        </div>
    )
}
export default project;