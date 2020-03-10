import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Denis Ken</h1>
            <h3>Hey there! I'm a developer with knowledge in games 
               and front-end. 
            </h3>
            <hr />
            <ul className="social">
               <li>
                  <a href={"https://github.com/DenisKen"} target={"_blank"} className="fa fa-github"/>
               </li>
               <li>
                  <a href={"https://www.instagram.com/deniskeni/"} target={"_blank"} className="fa fa-instagram"/>
                  </li>
               <li>
                  <a href={"https://www.linkedin.com/in/denisken/"} target={"_blank"} className="fa fa-linkedin" />
               </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
