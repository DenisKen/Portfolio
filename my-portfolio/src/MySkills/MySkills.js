import React from 'react';
import './MySkills.css';

import icon_react from './Icons/Icon-react.png';

const mySkills = () => {


    return (
        <div className="Global-Background">
            <div className="Global-Content">
                <p className="MySkills-Title Global-Title"> What are my capability</p>
                <div className="MySkills-SubContent"> 
                    <div className="MySkills-Description">
                        <p> Desenvolvedor web e mobile. Atuei em diversos projetos com diferentes necessidades. </p>
                        <p> A busca pelo novo sempre foi forte. De desenvolvedor em jogos, me aprofundei em desenvolvimento web por curiosidade e em aplicativos feitos com React-Native</p>
                    </div>
                    <div className="MySkills-Skills">
                        <ul>
                            <li>
                                <img src={icon_react}/>
                                <p>Javascript</p>
                            </li>
                            <li>
                                <img src={icon_react}/>
                                <p>HTML/CSS</p>
                            </li>
                            <li>
                                <img src={icon_react}/>
                                <p>React</p>
                            </li>
                            <li>
                                <img src={icon_react}/>
                                <p>Unity3D</p>
                            </li>
                            <li>
                                <img src={icon_react}/>
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