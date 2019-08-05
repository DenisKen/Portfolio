import React from 'react';
import './MyProjects.css';

import Project from './Project';

import project1 from './Images/Project1/Main.jpg'; 
//Images
const images = {
    project1  
};

const myProjects = (props) => {


    return(
        <div className="Global-Content">
            <p className="Title Global-Title"> Some of my favourites projects </p>
            <div className="Projects-Content">
            <Project  
                
                image={images.project1}
                alt="lipsync"
            />
            <Project  

                image={images.project1}
                alt="owi"
            />
            <Project  
                image={images.project1}
                alt=""
            />
            <Project  
                image={images.project1}
                alt="TIKI"
            />
            </div>
            
        </div>
    )    
}
export default myProjects;