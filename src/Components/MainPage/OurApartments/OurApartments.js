import React, { Component } from "react";
import "./OurApartments.scss";

class OurApartments extends Component {
  render() {
    return (
      <section className="ourApartments">
        <div className="textDiv">
          <p className="title">Nasze Apartamenty</p>
          <div className="orangeLine"></div>
          <p className="text">
            Komfortowe przestrzenie z doskonałym wyposażeniem zapewnią Ci
            niezapomniane doświadczenie. Zanurz się w atmosferze nowoczesności i
            luksusu, ciesząc się wygodą naszych loftów. Twój doskonały pobyt
            zaczyna się tutaj!
          </p>
        </div>
        <div className="imagesDiv">
          <div className="image img1"></div>
          <div className="image img2"></div>
          <div className="image img3"></div>
        </div>
      </section>
    );
  }
}

export default OurApartments;
