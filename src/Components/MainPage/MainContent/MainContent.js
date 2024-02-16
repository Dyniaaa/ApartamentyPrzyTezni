import React, { Component } from "react";
import "./MainContent.scss";
import Content from "./Content/Content";

class MainContent extends Component {
  render() {
    return (
      <section className="mainContent">
        <div className="container">
          <Content />
        </div>
      </section>
    );
  }
}

export default MainContent;
