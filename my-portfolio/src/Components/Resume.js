import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Educação</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Senac Campus Santo Amaro</h3>
                  <p className="info">Técnico em Jogos Digitais<span>&bull;</span><em className="date"> 2013</em></p>
                  <p> 
                     Esse curso abriu todas as portas que tenho hoje. Quando eu tinha 16, eu não estava conseguindo passar em nenhuma 
                     prova dos cursos técnicos da região. E nesse curso, a inscrição era por ordem de chegada e renda. Foi aí que consegui
                     minha primeira oportunidade.
                     <br/>
                     Aprendi sobre o mundo da programação. Fui um dos melhores alunos. E logo depois de terminar o curso, comecei minha faculdade.
                  </p>
               </div>
            </div>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Senac Campus Santo Amaro</h3>
                  <p className="info">Graduação em Jogos Digitais<span>&bull;</span><em className="date"> 2016</em></p>
                  <p>
                     Na faculdade, tive um reforço do que aprendi no técnico. Por causa do técnico eu já estava bem mais
                     avançado do que o pessoal da minha sala.
                     <br/>
                     Eu desenvolvi alguns mini jogos durante os tempos livres da faculdade, o que me deu uma boa noção de programação.
                  </p>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Trabalho</span></h1>
         </div>

         <div className="nine columns main-col">
            <h3>CIT - Senac</h3>
            <p className="info">Game Developer<span>&bull;</span><em className="date">Mai 2016 - Nov 2016</em></p>
            <p>Após ter feito um projeto de iniciação científica e ter um artigo publicado, consegui uma indicação para o CIT Senac. 
               Onde eu programei todo o jogo, participei das reuniões com o cliente, definição e implementação do jogo TIKI.
            </p>
            <h3>OLOS - Tecnologia e Sistemas</h3>
            <p className="info">Developer<span>&bull;</span><em className="date">Nov 2016 - Até agora</em>  </p>
            <p>Recebi a proposta de emprego via Linkedin de um dos donos da empresa. Entrei na empresa
               para produzir aplicações inovadoras. 
               <br/>
               Desenvolvi aplicações usando Javascript e Unity. Um dos meus projetos criados, conseguiu o 1° lugar no evento
               Inove Olos, ganhando o prêmio de R$ 70 mil.
            </p>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Habilidades</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
            Pra mim, um dia sem aprender nada, é um dia perdido. Estou sempre procurando coisas novas e desafiadoras para fazer. 
            Javascript e threeJS foram algumas linguagens que aprendi sozinho.
            </p>

				<div className="bars">
				<ul className="skills">
              <li><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"GIT"}</em></li>
              <li key={"Javascript"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"Javascript"}</em></li>
              <li key={"Unity 3D"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"Unity 3D"}</em></li>
              <li key={"HTML"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"HTML"}</em></li>
              <li key={"CSS"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"CSS"}</em></li>
              <li key={"Three js"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"Three js"}</em></li>
              <li key={"React js"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"React js"}</em></li>
              <li key={"Construct 2"}><span style={{width:"40%"}}className={"bar-expand"}></span><em>{"Construct 2"}</em></li>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
