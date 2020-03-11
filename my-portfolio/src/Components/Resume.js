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
                  <p className="info">Certificate in Digital Games<span>&bull;</span><em className="date"> 2013</em></p>
                  <p>
                     This course opened all the doors I have today. When I was 16, I was unable to pass any 
                     proof of courses in the region. And in this course, subscription was 
                     by order of arrival and familiar income. That's when I got 
                     my first opportunity.
                     <br/>
                     I learned about the world of programming. I was one of the best students. 
                     And after finishing the course I started my graduation.
                  </p>
               </div>
            </div>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Senac Campus Santo Amaro</h3>
                  <p className="info">Graduation in Game Development<span>&bull;</span><em className="date"> 2016</em></p>
                  <p>
                  At graduation, I learned more deeply about game development. Again, I was one of the best students.
                  <br/>
                  I developed some mini games during free time of my gradution, 
                  it gave me a good sense of programming.
                  </p>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
            <h3>CIT - Senac</h3>
            <p className="info">Game Developer<span>&bull;</span><em className="date">Mai 2016 - Nov 2016</em></p>
            <p>After creating a project of Scientific Research and published an article, I got a nomination for CIT Senac.
               Where I programmed the entire game, I attended meetings with the customer, We defined the game and
               we reproduced the game for <a href={"https://www.menteturbinada.com.br/"} target={"_blank"}>https://www.menteturbinada.com.br/</a>
            </p>
            <h3>OLOS - Tecnologia e Sistemas</h3>
            <p className="info">Developer<span>&bull;</span><em className="date">Nov 2016 - Até agora</em>  </p>
            <p>
               I received the job offer via Linkedin from one of the owners of the company. I joined the company to develop innovative applications.
               <br/>
               I developed some applicaton using Javascript and Unity. We made applications to great customers like Santander, 
               Claro, Atento, Sky and more. 
            </p>
        </div>
      </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>
               Form me, a day without learning anything is a lost day.
               I'm always looking for new and challenging things to do.
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

      <div className="row">

         <div className="three columns header-col">
            <h1><span>Awards</span></h1>
         </div>

         <div className="nine columns main-col">
            <h3>Inove Olos</h3>
            <p className="info">1st Place<span>&bull;</span><em className="date">R$ 70.000 reward</em></p>
            <p>
               I created Lisy, a software of lip syncronization for 3D models that guaranteed me the 1st place of Inove Olos.
               The Inove Olos is a competition where the most innovative applications compete with each other.
            </p>
        </div>
      </div>

   </section>
    );
  }
}

export default Resume;
