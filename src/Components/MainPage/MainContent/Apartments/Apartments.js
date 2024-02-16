import React, { Component } from "react";
import "./Apartments.scss";
import { NavLink } from "react-router-dom";

class Apartments extends Component {
  render() {
    return (
      <section className="apartments">
        <div className="textDiv">
          <p className="title">Apartamenty przy tężni</p>
          <div className="underLine"></div>
          <p className="text">
            Zapraszamy do komfortowych apartamentów przy tężni w Busku-Zdroju.
            Twój dom blisko uzdrowiska czeka na Ciebie
          </p>
        </div>
        <div className="textDiv">
          <p className="title">Nasze Apartamenty</p>
          <div className="underLine"></div>
          <p className="text">
            Doświadcz niezapomnianego pobytu w komfortowych apartamentach z
            doskonałym wyposażeniem. Twój doskonały pobyt zaczyna się tutaj!
          </p>
        </div>
        <div className="images">
          <div className="img one"></div>
          <div className="img two"></div>
          <div className="img three"></div>
        </div>
        <NavLink to={"/Apartments"} className={"moreButton"}>
          Zobacz więcej
        </NavLink>
      </section>
    );
  }
}

export default Apartments;
