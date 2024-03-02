import React, { Component } from "react";
import "./ApartmentPage.scss";
import Menu from "../../../Menu/Menu";
import Footer from "../../../Footer/Footer";
import Gallery from "./Gallery/Gallery";

class ApartmentPage extends Component {
  render() {
    const { AptName, ImagesList } = this.props;

    return (
      <section className="apartmentPage">
        <Menu />
        <Gallery name={AptName} images={ImagesList} />
        <Footer />
      </section>
    );
  }
}

export default ApartmentPage;
