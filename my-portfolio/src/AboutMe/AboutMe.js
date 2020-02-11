import React from 'react';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import './AboutMe.css';

import '../GlobalStyle.css';

//Images
import ali_flying from './Images/Me.jpg';

const aboutMe = (props) => {

    
    return(
        <div className="AboutMe-Content Global-Background">
            <div className="Global-Content AboutMe-SubContent">
                <div>
                    <ScrollAnimation animateIn="fadeInDown" animateOnce={true} offset={0}>
                        <p className="AboutMe-Title Global-Title">Denis Ken. Hello!</p>
                    </ScrollAnimation>
                    <div >
                        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>    
                        <div className="AboutMe-Description Global-Text-Description">
                            <p> I'm a Full-StackOverFlow developer</p>
                            <br></br>
                            {/*<p> My site is still developing. I'm creating a game like Life Strange, but to run on mobile browsers... Will be awesome. Wait for it.</p>*/}
                            <p> I'm graduated from Senac in Game Developer and I learned Front-end by myself </p>   
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="AboutMe-Image-Div">
                    <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>  
                        <img className="AboutMe-Image" src={ali_flying} alt={props.alt}></img>
                    </ScrollAnimation>
                </div>
                
                
            </div>
           
        </div>
    )
}

export default aboutMe;