import React, { Component } from "react";
import "./Content.scss";
import { NavLink } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <section className="content">
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
        <div className="textDiv">
          <p className="title">Lokalizacja</p>
          <div className="underLine"></div>
          <p className="text">
            Nasze apartamenty łączą wygodę z doskonałą lokalizacją, blisko
            atrakcji, restauracji i sklepów. Odkrywaj zabytki, smakuj lokalne
            kulinaria i ciesz się łatwym dostępem do wszystkiego, co miasto ma
            do zaoferowania.
          </p>
        </div>
        <div className="map">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.1004814625425!2d20.715921357828556!3d50.46260813202309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c318b603749b%3A0x7c2c791c19b52654!2sApartamenty%20Przy%20T%C4%99%C5%BCni!5e0!3m2!1spl!2spl!4v1708125716125!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  }
}

export default Content;
