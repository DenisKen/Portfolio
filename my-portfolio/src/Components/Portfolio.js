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

              <h1>VEJA ALGUNS DOS MEUS TRABALHOS.</h1>

              <div className="overlay">
                <div className="portfolio-item-meta">
                <h5>TIKI</h5>
                  <p>TIKI Game foi meu primeiro jogo desenvolvido em UNITY 3D. A parte mais divertida de
                    desenvolve-lo foi criar a comunicação dos cubos. Cada cubo se comunica com os adjacentes, usando recursividade.  
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
                  <p>O LISY é um software para síncronia lábial e facial de modelos 3D ou 2D. Com o Lisy, é possível síncronizar a fala
                    em tempo real em qualquer aplicação. O Lisy é vencedor do prêmio Inove Olos.
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
                    <img src={"images/portfolio/teste2.png"} />
                    <img src={"images/portfolio/teste3.png"} />
                    <img src={"images/portfolio/lisy_apng.png"} />
                  </Carousel>
                </div>

                <div className="portfolio-item-meta">
                  <h5>VÍDEO BOT</h5>
                  <p>Vídeo Bot, chamado também como OWI é uma aplicação Web Mobile para resolver qualquer tipo de problema, 
                    como: dúvidas de algum produto, venda,
                    apresentação de produtos, etc.
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
                  <p>Conarec VR foi um projeto para o maior e mais prestigiado evento de relacionamento com clientes da América Latina, o CONAREC.
                    O projeto foi feito em Unity 3D utilizando a tecnologia do Google, o Google Dream. Fomos um dos primeiros
                    a importar o produto dos Estados Unidos e aplica-lo no Brasil.
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
                    <img src={"images/portfolio/conarec_4.jpg"} />
                    <img src={"images/portfolio/conarec_5.jpg "} />
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
