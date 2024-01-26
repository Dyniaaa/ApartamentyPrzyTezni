import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="menu">
          <img alt="Logo" />
          <ul>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Apartamenty
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <section className="background">
          <div className="backgroundImage"></div>
        </section>
      </section>
    );
  }
}

export default Main;
