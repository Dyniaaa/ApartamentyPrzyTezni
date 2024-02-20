import React, { Component } from "react";
import "./ApartmentComponent.scss";
import { NavLink } from "react-router-dom";

class ApartmentComponent extends Component {
  render() {
    const { bgImg, aptName, link } = this.props;

    const styles = {
      backgroundImage: `url("${bgImg}")`,
    };

    return (
      <section className="apartmentComponent">
        <NavLink to={link} className={"navlinkText"}>
          <div className="textDiv">
            <p className="text">{aptName}</p>
            <div className="goldenArrow"></div>
          </div>
        </NavLink>
        <NavLink to={link} className={"navlinkImg"}>
          <div style={styles} className="aptComImg"></div>
        </NavLink>
      </section>
    );
  }
}

export default ApartmentComponent;
