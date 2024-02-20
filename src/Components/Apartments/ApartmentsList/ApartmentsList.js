import ss1 from "./Images/ss1.png";
import ss2 from "./Images/ss2.png";
import ss3 from "./Images/ss3.png";

import React, { Component } from "react";
import "./ApartmentsList.scss";
import ApartmentComponent from "./ApartmentComponent/ApartmentComponent";

class ApartmentsList extends Component {
  render() {
    return (
      <section className="apartmentsList">
        <div className="left">
          <ApartmentComponent bgImg={ss1} aptName='APARTAMENT 1' />
          <ApartmentComponent bgImg={ss2} aptName="APARTAMENT 2" />
          <ApartmentComponent bgImg={ss3} aptName="APARTAMENT 3" />
        </div>
        <div className="right"></div>
      </section>
    );
  }
}

export default ApartmentsList;
