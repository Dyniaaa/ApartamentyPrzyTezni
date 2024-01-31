import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Main.scss";


class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="menu">
          <div className="logo"></div>
          <ul>
            <li>
              <NavLink to={"/"} className={"listElement"}>
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Apartments"} className={"listElement"}>
                Apartamenty
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"} className={"listElement"}>
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
        <section className="background">
          <div className="backgroundImage"></div>
          <p>
            Tężnia w zasięgu,<br/> Komfort w apartamencie,<br/> Twoje idealne miejsce na
            relaks
          </p>
        </section>
      </section>
    );
  }
}

export default Main;
