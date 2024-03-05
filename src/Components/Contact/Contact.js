import React, { Component } from "react";
import Menu from "../Menu/Menu";
import ContactContent from "./ContactContent/ContactContent";

class Contact extends Component {
  render() {
    return (
      <section>
        <Menu />
        <ContactContent />
      </section>
    );
  }
}

export default Contact;
