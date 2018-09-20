import React, { Component } from 'react';

class HeroSection extends Component{
  render(){
    return(
      <div className=" hero-section callout gradient large">
          <div className="text-center">
              <h1>
                  <div className="hero-section__site--logo">K-Mit</div>
              </h1>
              <p className="lead">
                  Digitala tjänster i världsklass<br/>Innovationspartner och digital leverantör som älskar smarta tekniska lösningar.
              </p>
              <div className="heroNav">
              <a href="#om-oss" className=" hero-section__button--white button large">
                  Läs om oss
              </a>
              <a href="#kontakta-oss" className="hero-section__button--hollow button large hollow">
                  Kontakta oss
              </a>
              </div>
        </div>
      </div>
    );
  }
}
export default HeroSection;
