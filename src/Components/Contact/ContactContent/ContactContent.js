import React, { Component } from "react";
import "./ContactContent.scss";
import Form from "./Form/Form";
import Info from "./Info/Info";

class ContactContent extends Component {
  render() {
    return (
      <section className="contactContent">
        <div className="contactContentDiv">
          <Form />
        </div>
        <div className="contactContentDiv">
          <Info />
        </div>
      </section>
    );
  }
}

export default ContactContent;
