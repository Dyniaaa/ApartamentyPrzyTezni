import React, { Component } from "react";
import "./MainContent.scss";
import Apartments from "./Apartments/Apartments";
import Location from "./Location/Location";

class MainContent extends Component {
  render() {
    return (
      <section className="mainContent">
        <div className="container">
          <Apartments />
          <Location />
        </div>
      </section>
    );
  }
}

export default MainContent;
