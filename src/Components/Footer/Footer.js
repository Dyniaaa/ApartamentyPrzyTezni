import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="contact">
          <p className="contactTitle">Kontakt</p>
          <ul>
            <li>
              <div className="icon mail"></div>
              <NavLink to={"/contact"} className={"goToForm"}>
                Przejdź do formularza kontaktowego
              </NavLink>
            </li>
            <li>
              <div className="icon mail"></div>
              <p>Apartamentyprzytezni@gmail.com</p>
            </li>
            <li>
              <div className="icon phone"></div>
              <p>123 456 789</p>
            </li>
          </ul>
        </div>
        <div className="footerLogo"></div>
      </section>
    );
  }
}

export default Footer;
