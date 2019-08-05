import React from 'react';
import './MySkills.css';

const mySkills = () => {


    return (
        <div className="Global-Content">
            <p className="Title Global-Title"> What are my capability</p>
            <div className="SubContent"> 
                <div className="Description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, oluptate velit essident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className="Skills">
                    <ul>
                        <li>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <p>HTML/CSS</p>
                        </li>
                        <li>
                            <p>React</p>
                        </li>
                        <li>
                            <p>Unity3D</p>
                        </li>
                        <li>
                            <p>ThreeJS</p>
                        </li>
                    </ul>
                </div>  
            </div>

        </div>
    )
}

export default mySkills;