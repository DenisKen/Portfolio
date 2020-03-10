import React, { Component } from 'react';
import pdf from './cv.pdf';


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
               Eu amo novos desafios e aprender coisas novas. Desenvolvi jogos em Unity,
               para WebGL, Android e até mesmo Virtual Reality, utilizando o Google Dream.
               <br/>
               Desenvolvi aplicações para Web Mobile, onde tive desafios de transformar uma
               engine 2D, capaz de reproduzir 3D. E consegui algumas conquistas e prêmios
               por esse meu lado de desbravar o desconhecido e sempre estar disposto a aprender
               novas coisas.
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contato</h2>
                  <p className="address">
						   <span>Denis Ken</span><br/>
                     <span>hey@denis.ken</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={pdf} className="button" target={"_blank"}><i className="fa fa-download"></i>CV</a>
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
