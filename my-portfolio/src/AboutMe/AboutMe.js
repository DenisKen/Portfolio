import React from 'react';
import './AboutMe.css';

import '../GlobalStyle.css';

//Images
import ali_flying from './Images/Me.jpg';

const aboutMe = (props) => {

    return(
        <div className="AboutMe-Content Global-Background">
            <div className="Global-Content">
                <p className="AboutMe-Title Global-Title">Denis Ken. Prazer.</p>
                <div className="AboutMe-SubContent">
                    <div className="AboutMe-Description Global-Text-Description">
                        <p> 22 anos. Desenvolvedor Full-StackOverFlow e nas horas vagas crio robôs como a Ali.</p>
                        <br></br>
                        <p> Numa época em que tudo é automatizado, nada melhor do que automatizar seu próprio portifólio.</p>
                        <br></br>
                        <p> Sou formado pelo Senac em Jogos Digitais e por curiosidade, estudei desenvolvimento web sozinho</p>
                        
                    </div>
                    <div className="AboutMe-Image">
                        <img className="Shrink-1" src={ali_flying} alt={props.alt}></img>
                    </div>
                </div>
            
            </div>
        </div>
    )
    

}

export default aboutMe;