import React, { Component } from "react";
import "./MainPage.scss";
import Footer from "../Footer/Footer";
import Main from "./Main/Main";

class MainPage extends Component {
  render() {
    return (
      <section className="mainPage">
        <Main />
        <Footer />
      </section>
    );
  }
}

export default MainPage;
