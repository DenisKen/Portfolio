import React from 'react';
import './AboutMe.css';

import '../GlobalStyle.css';

//Images
import ali_flying from './Images/Ali_Flying.png';
import ali_fire from './Images/Ali_Fire.png';

const aboutMe = (props) => {

    return(
        <div className="Content">
            <p className="Title GlobalTitle">A little about Ali and Me</p>
            <div className="SubContent">
                <div className="Description">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, oluptate velit essident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className="Image">
                    <img src={ali_flying}></img>
                    <img src={ali_fire}></img>
                </div>
            </div>
           
        </div>
    )
    

}

export default aboutMe;