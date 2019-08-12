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
                    
                    image={images.imageProject_1}
                    gif={images.imageProject_1}
                    alt="lipsync"
                    subtitle="OWI"
                />
                <Project  

                    image={images.imageProject_1}
                    gif={images.imageProject_1}
                    alt="owi"
                    subtitle="OWI"
                />
                <Project  
                    image={images.imageProject_1}
                    gif={images.imageProject_1}
                    alt=""
                    subtitle="OWI"
                />
                <Project  
                    image={images.imageProject_1}
                    gif={images.imageProject_1}
                    alt="tiki"
                    subtitle="OWI"
                />
                </div>
                
            </div>
        </div>
    )    
}
export default myProjects;