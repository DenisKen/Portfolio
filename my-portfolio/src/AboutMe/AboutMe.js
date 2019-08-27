import React from 'react';
import './AboutMe.css';

import '../GlobalStyle.css';

//Images
import ali_flying from './Images/Me.jpg';

const aboutMe = (props) => {

    
    return(
        <div className="AboutMe-Content Global-Background">
            <div className="Global-Content AboutMe-SubContent">
                <div>
                    <p className="AboutMe-Title Global-Title">Denis Ken. Prazer.</p>
                    <div >
                        <div className="AboutMe-Description Global-Text-Description">
                            <p> 22 anos. Desenvolvedor Full-StackOverFlow e nas horas vagas crio robôs como a Ali.</p>
                            <br></br>
                            <p> Numa época em que tudo é automatizado, nada melhor do que automatizar seu próprio portifólio.</p>
                            <br></br>
                            <p> Sou formado pelo Senac em Jogos Digitais e por curiosidade, estudei desenvolvimento web sozinho</p>  
                        </div>
                    </div>
                </div>
                <div className="AboutMe-Image-Div">
                    <img className="AboutMe-Image" src={ali_flying} alt={props.alt}></img>
                </div>
            </div>
           
        </div>
    )
}

export default aboutMe;