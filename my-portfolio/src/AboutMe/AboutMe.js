import React from 'react';
import './AboutMe.css';

import '../GlobalStyle.css';

//Images
import ali_flying from './Images/Ali_Flying.png';
import ali_fire from './Images/Ali_Fire.png';

const aboutMe = (props) => {

    return(
        <div className="AboutMe-Content Global-Background">
            <div className="Global-Content">
                <p className="AboutMe-Title Global-Title">Denis Ken. Prazer.</p>
                <div className="AboutMe-SubContent">
                    <div className="AboutMe-Description Global-Text-Description">
                        <p> Sou Desenvolvedor web e de jogos. Nas horas vagas crio robôs, e Ali 
                            Ali é uma invenção minha. Numa época em que tudo é automatizado</p>
                    </div>
                    <div className="AboutMe-Image">
                        <img src={ali_flying} alt={props.alt}></img>
                        <img src={ali_fire} alt={props.alt}></img>
                    </div>
                </div>
            
            </div>
        </div>
    )
    

}

export default aboutMe;