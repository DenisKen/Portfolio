import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class Portfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0,
      slidePerPage: 1.6 
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    if (window.innerWidth > 900)
      this.setState({slidePerPage: 1.6})
    else 
      this.setState({slidePerPage: 1})

    this.setState({ 
      width: window.innerWidth, 
      height: window.innerHeight });
  }  
  
  render() {

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

              <h1>SEE SOME OF MY WORKS.</h1>

              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>TIKI</h5>
                  <p>
                    TIKI Game was my first game made in Unity 3D. 
                    The coolest part of develop it was create the cube's communications.
                    Each cube communicates with adjancentes, using recursive methods.
                  </p>
                  {this.state.width > 932 ? null : null}
                  <Carousel
                    className={"portfolio-carousel"}
                    centered
                    clickToChange
                    infinite
                    
                    slidesPerPage={this.state.slidePerPage}
                    arrowLeft={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft portfolio-carousel-arrows"><span>next</span></button>}
                    arrowRight={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowRight portfolio-carousel-arrows portfolio-carousel-arrow-right"><span>next</span></button>}
                    addArrowClickHandler
                    >
                    
                    <img src={"images/portfolio/tiki_1.png"} />
                    <img src={"images/portfolio/tiki_2.png"} />
                    <img src={"images/portfolio/tiki_3.png"} />
                    <img src={"images/portfolio/tiki_4.png"} />
                    <img src={"images/portfolio/tiki_5.png"} />
                    <img src={"images/portfolio/tiki_apng.png"} />
                  </Carousel>
                </div>
                
                <div className="portfolio-item-meta">
                  <h5>LISY - A LIPSYNC SOFTWARE</h5>
                  <p>
                    LISY is a software of lip synchronization of 3D models. With LISY, 
                    it's possible synchronize speech in real time in any application!
                    Lisy is the winner of Inove Olos award.
                  </p>

                  <Carousel
                    className={"portfolio-carousel"}
                    centered
                    clickToChange
                    infinite
                    slidesPerPage={this.state.slidePerPage}
                    arrowLeft={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft portfolio-carousel-arrows"><span>next</span></button>}
                    arrowRight={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowRight portfolio-carousel-arrows portfolio-carousel-arrow-right"><span>next</span></button>}
                    addArrowClickHandler
                    >
                    <img src={"images/portfolio/lisy_2.png"} />
                    <img src={"images/portfolio/lisy_1.png"} />
                    <img src={"images/portfolio/lisy_3.png"} />
                    <img src={"images/portfolio/lisy_4.png"} />
                    <img src={"images/portfolio/lisy_apng.png"} />
                  </Carousel>
                </div>

                <div className="portfolio-item-meta">
                  <h5>VIDEO BOT</h5>
                  <p>
                    Video Bot, also called as OWI is a Web Mobile application to solve any kind of problem.
                    Like: product questions, sale, product presentation, etc.
                  </p>

                  <Carousel
                    className={"portfolio-carousel"}
                    centered
                    clickToChange
                    infinite
                    slidesPerPage={this.state.slidePerPage}
                    arrowLeft={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft portfolio-carousel-arrows"><span>next</span></button>}
                    arrowRight={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowRight portfolio-carousel-arrows portfolio-carousel-arrow-right"><span>next</span></button>}
                    addArrowClickHandler
                    >
                    
                    <img src={"images/portfolio/owi_1.png"} />
                    <img src={"images/portfolio/owi_2.png"} />
                    <img src={"images/portfolio/owi_3.png"} />
                    <img src={"images/portfolio/owi_apng.png"} />
                  </Carousel>
                </div>

                <div className="portfolio-item-meta">
                  <h5>CONAREC - VR GOOGLE DREAM</h5>
                  <p>
                    Conarec VR was a project for the most prestigious customer relationship event in Latin America, the CONAREC event.
                    The project was developed in Unity 3D using Google Dream technology. We were one of the first
                    people to import the product from the EUA and apply it in Brazil.
                  </p>

                  <Carousel
                    className={"portfolio-carousel"}
                    centered
                    clickToChange
                    infinite
                    slidesPerPage={this.state.slidePerPage}
                    arrowLeft={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft portfolio-carousel-arrows"><span>next</span></button>}
                    arrowRight={<button class="BrainhubCarousel__arrows BrainhubCarousel__arrowRight portfolio-carousel-arrows portfolio-carousel-arrow-right"><span>next</span></button>}
                    addArrowClickHandler
                    >
                    
                    <img src={"images/portfolio/conarec_1.png"} />
                    <img src={"images/portfolio/conarec_2.png"} />
                    <img src={"images/portfolio/conarec_3.png"} />
                    <img src={"images/portfolio/conarec_4.png"} />
                    <img src={"images/portfolio/conarec_5.png "} />
                    <img src={"images/portfolio/conarec_apng.png"} />
                    
                  </Carousel>
                </div>
              </div>     
              
            </div>
        </div>
    </section>
    );
  }
}

export default Portfolio;
