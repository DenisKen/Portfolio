import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import './MySkills.css';

import { ReactComponent as Icon_Javascript} from 'simple-icons/icons/javascript.svg';
import { ReactComponent as Icon_HTML} from 'simple-icons/icons/html5.svg';
import { ReactComponent as Icon_CSS3} from 'simple-icons/icons/css3.svg';
import { ReactComponent as Icon_React} from 'simple-icons/icons/react.svg';
import { ReactComponent as Icon_Unity} from 'simple-icons/icons/unity.svg';
import { ReactComponent as Icon_Three} from 'simple-icons/icons/trakt.svg';


const mySkills = () => {

    const x = require('simple-icons/icons/react');
    console.log(x.svg);
    return (
        <div className="Global-Background">
            <div className="Global-Content">
                <ScrollAnimation animateIn="fadeInDown" animateOnce="true">
                    <p className="MySkills-Title Global-Title"> What are my capability</p>
                </ScrollAnimation>
                <div className="MySkills-SubContent"> 
                    <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
                        <div className="MySkills-Description Global-Text-Description">
                            <p> Atuei em diversos projetos com diferentes necessidades. </p>
                            <br></br>
                            <p> A busca pelo novo sempre foi forte. De desenvolvedor em jogos, me aprofundei em desenvolvimento web por curiosidade e em aplicativos feitos em React-Native</p>
                            <br></br>
                        </div>
                    </ScrollAnimation>
                    <div className="MySkills-Skills">
                        <ul>
                            <ScrollAnimation animateIn="rotateInUpRight" animateOnce="true">
                                <li>   
                                    <Icon_Javascript className="MySkills-Skills--Icon"/>
                                    <p>Javascript</p>
                                </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInDownLeft" animateOnce="true">
                            <li>
                                <Icon_HTML className="MySkills-Skills--Icon"/>
                                <p>HTML</p>
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInDownRight" animateOnce="true">
                            <li>
                                <Icon_CSS3 className="MySkills-Skills--Icon"/>
                                <p>CSS</p>
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInUpLeft" animateOnce="true">
                            <li>
                                <Icon_React className="MySkills-Skills--Icon"/>
                                <p>React</p>
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInUpRight" animateOnce="true">
                            <li>
                                <Icon_Unity className="MySkills-Skills--Icon"/>
                                <p>Unity3D</p>
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInDownRight" animateOnce="true">
                            <li>
                                <Icon_Three className="MySkills-Skills--Icon"/>
                                <p>ThreeJS</p>
                            </li>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="rotateInDownLeft" animateOnce="true">
                            <li>
                                <Icon_Three className="MySkills-Skills--Icon"/>
                                <p>Construct 2</p>
                            </li>
                            </ScrollAnimation>
                        </ul>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default mySkills;