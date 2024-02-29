import React, { Component } from "react";
import "./Info.scss";

class Info extends Component {
  render() {
    return (
      <section className="info">
        <p className="title">Informacje</p>
        <div className="infoContent">
          <div className="infoText">
            <ul>
              <li>
                <div className="icon mail"></div>
                <p>Apartamentyprzytezni@gmail.com</p>
              </li>
              <li>
                <div className="icon phone"></div>
                <p>123 456 789</p>
              </li>
              <li>
                <div className="icon location"></div>
                <p>Janusza Kusocińskiego 12, 28-100 Busko-Zdrój</p>
              </li>
            </ul>
          </div>
          <div className="mapBG">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5079.647247978741!2d20.716199000000003!3d50.463009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c247e7b0ce43%3A0xf34731ae869e4440!2sJanusza%20Kusoci%C5%84skiego%2012%2C%2028-100%20Busko-Zdr%C3%B3j%2C%20Polska!5e0!3m2!1spl!2sus!4v1709242636944!5m2!1spl!2sus"
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
