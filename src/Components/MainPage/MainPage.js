import React, { Component } from "react";
import "./MainPage.scss";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import APT from "./APT/APT";

class MainPage extends Component {
  render() {
    return (
      <section className="mainPage">
        <Main />
        <APT />
        <Footer />
      </section>
    );
  }
}

export default MainPage;
