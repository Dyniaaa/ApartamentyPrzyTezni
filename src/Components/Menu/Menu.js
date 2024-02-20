import React, { Component } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <section className="menu">
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
      </section>
    );
  }
}

export default Menu;
