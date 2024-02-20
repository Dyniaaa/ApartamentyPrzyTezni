import React, { Component } from "react";
import "./Apartments.scss";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

class Apartments extends Component {
  render() {
    return (
      <section className="apartments">
        <Menu />
        <Footer />
      </section>
    );
  }
}

export default Apartments;
