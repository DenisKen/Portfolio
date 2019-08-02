import React from 'react';
import './MyProjects.css';

import Project from './Project';

import koolImage from './Images/Project1/Cover.png'; 
//Images
const images = {
    koolImage  
};

const myProjects = (props) => {


    return(
        <div className="Global-Content">
            <p className="Title Global-Title"> Some of my favourites projects </p>
            <Project  
                image={images.koolImage}
                alt="denis"
            />
        </div>
    )    
}
export default myProjects;