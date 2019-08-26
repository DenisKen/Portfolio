import React from 'react';
import './MyProjects.css';

import Project from './Project';

import imageProject_1 from './Images/Project_Tiki.jpeg'; 
import imageProject_2 from './Images/Project_Tiki.jpeg'; 
import imageProject_3 from './Images/Project_Lipsync.jpeg'; 
import imageProject_4 from './Images/Project_Conarec.jpeg'; 

import videoProject_1 from './Videos/Project_Tiki.mp4';
import videoProject_2 from './Videos/Project_Tiki.mp4';
import videoProject_3 from './Videos/Project_Lipsync.mp4';
import videoProject_4 from './Videos/Project_Conarec.mp4';


const images = {
    imageProject_1,
    imageProject_2,
    imageProject_3,
    imageProject_4
};

const videos = {
    videoProject_1,
    videoProject_2,
    videoProject_3,
    videoProject_4
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
                    image={images.imageProject_2}
                    video={videos.videoProject_2}
                    alt="owi"
                    subtitle="OWI"
                />
                <Project  
                    image={images.imageProject_3}
                    video={videos.videoProject_3}
                    alt="aa"
                    subtitle="OWI"
                />
                <Project  
                    image={images.imageProject_4}
                    video={videos.videoProject_4}
                    alt="tiki"
                    subtitle="OWI"
                />
                </div>
                
            </div>
        </div>
    )    
}
export default myProjects;