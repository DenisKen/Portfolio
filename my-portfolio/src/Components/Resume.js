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
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Senac Campus Santo Amaro</h3>
                  <p className="info">Graduação em Jogos Digitais<span>&bull;</span><em className="date"> 2016</em></p>
                  <p>Eu fiz lá </p>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
            <h3>Senac Campus Santo Amaro</h3>
            <p className="info">Graduação em Jogos Digitais<span>&bull;</span><em className="date"> 2016</em></p>
            <p>Eu fiz lá </p>
            <h3>MIT - Microsoft </h3>
            <p className="info">Graduação em Jogos Digitais<span>&bull;</span><em className="date"> 2016</em></p>
            <p>Eu fiz lá </p>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
            Here you can create a short write-up of your skills to show off to employers
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
