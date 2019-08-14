import React from 'react';
import './MyProjects.css';

import Project from './Project';

import imageProject_1 from './Images/Project1/Main.jpg'; 
import gifProject_1 from './Images/Project1/Giphy.gif'; 
//Images
const images = {
    imageProject_1  
};

const gifs = {
    gifProject_1
}

const myProjects = (props) => {


    return(
        <div className="Global-Background MyProjects-Content">
            <div className="Global-Content">
                <p className="MyProjects-Title Global-Title"> Some of my favourites projects </p>
                <div className="MyProjects-Content--Projects">
                <Project  
                    
                    alt="lipsync"
                    subtitle="OWI"
                />
                <Project  
                    alt="owi"
                    subtitle="OWI"
                />
                <Project  
                    alt="aa"
                    subtitle="OWI"
                />
                <Project  
                    alt="tiki"
                    subtitle="OWI"
                />
                </div>
                
            </div>
        </div>
    )    
}
export default myProjects;