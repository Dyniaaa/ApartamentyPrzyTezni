import React, { Component } from "react";
import "./MainPage.scss";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import APT from "./APT/APT";
import OurApartments from "./OurApartments/OurApartments";

class MainPage extends Component {
  render() {
    return (
      <section className="mainPage">
        <Main />
        <APT />
        <OurApartments />
        <Footer />
      </section>
    );
  }
}

export default MainPage;
