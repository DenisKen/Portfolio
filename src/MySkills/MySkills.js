import React from 'react';
import './MySkills.css';

import icon_react from 'simple-icons/icons/react';

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
                <p className="MySkills-Title Global-Title"> What are my capability</p>
                <div className="MySkills-SubContent"> 
                    <div className="MySkills-Description Global-Text-Description">
                        <p> Atuei em diversos projetos com diferentes necessidades. </p>
                        <br></br>
                        <p> A busca pelo novo sempre foi forte. De desenvolvedor em jogos, me aprofundei em desenvolvimento web por curiosidade e em aplicativos feitos em React-Native</p>
                        <br></br>
                    </div>
                    <div className="MySkills-Skills">
                        <ul>
                            <li>   
                                <Icon_Javascript className="MySkills-Skills--Icon"/>
                                <p>Javascript</p>
                            </li>
                            <li>
                                <Icon_HTML className="MySkills-Skills--Icon"/>
                                <p>HTML</p>
                            </li>
                            <li>
                                <Icon_CSS3 className="MySkills-Skills--Icon"/>
                                <p>CSS</p>
                            </li>
                            <li>
                                <Icon_React className="MySkills-Skills--Icon"/>
                                <p>React</p>
                            </li>
                            <li>
                                <Icon_Unity className="MySkills-Skills--Icon"/>
                                <p>Unity3D</p>
                            </li>
                            <li>
                                <Icon_Three className="MySkills-Skills--Icon"/>
                                <p>ThreeJS</p>
                            </li>
                        </ul>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default mySkills;