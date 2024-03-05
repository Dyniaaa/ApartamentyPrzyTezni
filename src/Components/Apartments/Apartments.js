import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import ApartmentsList from "./ApartmentsList/ApartmentsList";

class Apartments extends Component {
  render() {
    return (
      <section>
        <Menu />
        <ApartmentsList />
        <Footer />
      </section>
    );
  }
}

export default Apartments;
