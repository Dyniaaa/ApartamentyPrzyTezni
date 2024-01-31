import React, { Component } from "react";
import "./APT.scss";

class APT extends Component {
  render() {
    return (
      <section className="apt">
        <p className="title">Apartamenty przy tężni</p>
        <div className="orangeLine"></div>
        <p className="aptText">
          Odkryj wyjątkowe apartamenty przy tężni w Busku-Zdroju!
          <br /> Nasze nowoczesne wnętrza oferują komfortowy wypoczynek.
          <br />
          Zrelaksuj się w bliskości zdrowotnych korzyści uzdrowiska,
          <br /> mając jednocześnie dostęp do domowej wygody.
          <br /> Twój dom przy tężni w Busku-Zdroju czeka na Ciebie!
        </p>
      </section>
    );
  }
}

export default APT;
