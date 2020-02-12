import React from 'react';
import './MyProjects.css';

import Project from './Project';

import imageProject_1 from './Images/Project_Tiki.jpeg'; 
import imageProject_2 from './Images/Project_OWI.jpeg'; 
import imageProject_3 from './Images/Project_Lipsync.jpeg'; 
import imageProject_4 from './Images/Project_Conarec.jpeg'; 

import videoProject_1 from './Videos/Project_Tiki.mp4';
import videoProject_2 from './Videos/Project_OWI.mp4';
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
                    className={"Project-Content-First"}
                    alt="tiki"
                    subtitle="TIKI"
                    textDescription="TIKI is a WebGL game where you control the nature
                    of the islands, using your powers to save it."
                    madeBy="Unity 3D"
                />
                <Project  
                    image={images.imageProject_2}
                    video={videos.videoProject_2}
                    className={"Project-Content-Last"}
                    alt="videoBot"
                    subtitle="Video Bot"
                    textDescription="Video BOT is a web application that solves all types
                    of problems. Help you understand bills, doubts, etc."
                    madeBy="Construct 2. Three JS. Javascript"
                />
                <Project  
                    image={images.imageProject_3}
                    video={videos.videoProject_3}
                    className={""}
                    alt="lipsync"
                    subtitle="Lisy - Software LipSync"
                    textDescription="Lisy is a software powerful of phoneme alignment. 
                    The Software transform text and audio in a perfect lip syncing"
                    madeBy="Pure Javascript"
                />
                <Project  
                    image={images.imageProject_4}
                    video={videos.videoProject_4}
                    className={"Project-Content-Last"}
                    alt="conarecVR"
                    subtitle="Conarec VR"
                    textDescription="It's a Virtual Reality application. You can see ours virtual
                    agents in real size and talk to them."
                    madeBy="Unity 3D and Google Dream"
                />
                </div>
                
            </div>
        </div>
    )    
}
export default myProjects;