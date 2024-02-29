import React, { Component } from "react";
import "./Contact.scss";
import Menu from "../Menu/Menu";
import ContactContent from "./ContactContent/ContactContent";

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <Menu />
        <ContactContent />
      </section>
    );
  }
}

export default Contact;
 