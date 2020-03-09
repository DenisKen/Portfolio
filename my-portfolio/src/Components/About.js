import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={"images/profile_pic.jpg"} alt="Denis Ken Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>Sobre</h2>

            <p>
               Quando eu era criança, tinha aquele sonho de mudar o mundo. Mas depois que comecei a enfrentar a vida dura na fase adulta,
               esse sonho desapareceu. 
               <br/>
               O comportamento muda, os objetivos mudam. Criamos uma máscara para se adequar a esse mundo regrado corporativo. Cada vez mais 
               perdendo a própria essência.
               <br/>
               Prazer, pode me chamar de Denis Ken.
               <br/>
               Meu primeiro emprego foi como desenvolvedor de jogos, onde eu criei um jogo bem legal. 
               Desde então, fui aprendendo e descobrindo coisas novas e interessantes sobre a minha área e sobre a vida.

               Hoje sou programador, atuo no desenvolvimento de jogos. e há ainda muitas coisas novas e revolucionárias para se criar.
               <br/>
               E nesse mundo corporativo, estou sem máscara. Posso dizer que sou eu mesmo. :D

            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contato</h2>
                  <p className="address">
						   <span>Denis Ken</span><br/>
                     <span>hey@denis.ken</span>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
