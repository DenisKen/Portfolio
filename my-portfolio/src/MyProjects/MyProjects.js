import React from 'react';
import './MyProjects.css';

import Project from './Project';

import imageProject_1 from './Images/Project1/Main.jpeg'; 

import videoProject_1 from './Videos/Project1/Tiki.mp4';

const images = {
    imageProject_1  
};

const videos = {
    videoProject_1
}

const myProjects = (props) => {


    return(
        <div className="Global-Background MyProjects-Content">
            <div className="Global-Content">
                <p className="MyProjects-Title Global-Title"> Some of my favourites projects </p>
                <div className="MyProjects-Content--Projects">
                <Project 
                    image={images.imageProject_1}
                    video={videos.videoProject_1}
                    alt="tiki"
                    subtitle="TIKI"
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