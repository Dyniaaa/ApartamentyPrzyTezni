import React, { Component } from "react";
import "./MainPage.scss";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";
import MainContent from "./MainContent/MainContent";

class MainPage extends Component {
  render() {
    return (
      <section className="mainPage">
        <Main />
        <MainContent />
        <Footer />
      </section>
    );
  }
}

export default MainPage;
