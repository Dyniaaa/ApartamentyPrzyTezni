import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      Menu: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      Menu: !prevState.Menu,
    }));
    console.log(this.state.Menu);
    let phoneMenu = document.querySelector(".phoneMenu");
    let first = document.querySelector(".first");
    let second = document.querySelector(".second");
    let third = document.querySelector(".third");
    if (!this.state.Menu) {
      phoneMenu.classList.add("slideDown");
      phoneMenu.classList.remove("slideUp");
      phoneMenu.classList.remove("hide");
      first.classList.add("firstPhoneMenuCellToX");
      first.classList.remove("firstPhoneMenuCellToNormal");
      second.classList.add("secondPhoneMenuCellToX");
      second.classList.remove("secondPhoneMenuCellToNormal");
      third.classList.add("thirdPhoneMenuCellToX");
      third.classList.remove("thirdPhoneMenuCellToNormal");
    }
    if (this.state.Menu) {
      phoneMenu.classList.add("slideUp");
      phoneMenu.classList.remove("slideDown");
      first.classList.remove("firstPhoneMenuCellToX");
      first.classList.add("firstPhoneMenuCellToNormal");
      second.classList.remove("secondPhoneMenuCellToX");
      second.classList.add("secondPhoneMenuCellToNormal");
      third.classList.remove("thirdPhoneMenuCellToX");
      third.classList.add("thirdPhoneMenuCellToNormal");
    }
  };

  render() {
    return (
      <section className="main">
        <div className="mainMenu">
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
          <div className="phoneMenuButton " onClick={this.handleClick}>
            <div className="phoneMenuButtonCell first"></div>
            <div className="phoneMenuButtonCell second"></div>
            <div className="phoneMenuButtonCell third"></div>
          </div>
        </div>
        <div className="phoneMenu slideUp hide">
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
            Tężnia w zasięgu,
            <br /> Komfort w apartamencie,
            <br /> Twoje idealne miejsce na relaks.
          </p>
        </section>
      </section>
    );
  }
}

export default Main;
