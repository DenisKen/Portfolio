import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import './Project.css'


const project = (props) => {
    

    const video = (
        <video className="Project-Video" loop>
            <source src={props.video} type="video/mp4"/>
        </video>       
    );
    const playVideo = () => {
        window.video = video;
    };
    return (
        <div className={"Project-Content " + props.className} style={{marginTop: props.marginTop}}>
            <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                <div className="Project-Picture">                
                    <div className="Project-Picture--Active" onClick={playVideo}>
                        {video}
                        <img className="Project-Picture--Static" src={props.image} alt={props.alt}/>
                    </div>        
                </div> 
                <div className="Project-Picture--TextLabel"> {props.subtitle} </div>
                {
                    <div className="Project-Picture--TextDescription">
                        <p>{props.textDescription}</p>
                        <br></br>
                        <p>Made with <strong>{props.madeBy}</strong></p>
                    </div>
                }
            </ScrollAnimation>
        </div>
    )
}


export default project;