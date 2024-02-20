import React, { Component } from "react";
import "./ApartmentComponent.scss";

class ApartmentComponent extends Component {
  render() {
    const { bgImg, aptName } = this.props;

    const styles = {
      backgroundImage: `url("${bgImg}")`,
    };

    return (
      <section className="apartmentComponent">
        <div className="textDiv">
          <p className="text">{aptName}</p>
          <div className="goldenArrow"></div>
        </div>
        <div style={styles} className="aptComImg"></div>
      </section>
    );
  }
}

export default ApartmentComponent;
