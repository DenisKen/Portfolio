import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }
    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div className="overlay">
              <div className="portfolio-item-meta">
              <h5>"TIKI"</h5>
                <p>"TOLO"</p>
              </div>
            </div>
            <Carousel
              className={"portfolio-carousel"}
              centered
              clickToChange
              infinite
              arrows
              slidesPerPage={1.5}
            >
              <img src={"images/portfolio/teste.png"} />
              <img src={"images/portfolio/teste2.png"} />
              <img src={"images/portfolio/teste3.png"} />
            </Carousel>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
