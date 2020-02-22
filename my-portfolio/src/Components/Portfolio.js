import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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

              <h1>Check Out Some of My Works.</h1>

              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>TIKI</h5>
                  <p>TIKI was a webGL game developed in Unity 3D. </p>
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
                    <img src={"images/portfolio/teste.png"} />
                    <img src={"images/portfolio/teste2.png"} />
                    <img src={"images/portfolio/teste3.png"} />
                  </Carousel>
                </div>
                
                <div className="portfolio-item-meta">
                <h5>LISY - A LIPSYNC SOFTWARE</h5>
                  <p>EASESAAS</p>

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
                    <img src={"images/portfolio/teste.png"} />
                    <img src={"images/portfolio/teste2.png"} />
                    <img src={"images/portfolio/teste3.png"} />
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
