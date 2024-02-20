import React, { Component } from "react";
import "./ApartmentComponent.scss";

class ApartmentComponent extends Component {
  render() {
    const { bgImg, aptName } = this.props;

    const styles = {
      backgroundImage: `url("${bgImg}")`,
    };

    function przekierujNaInnaStrone() {
      window.location.href = "/";
    }

    return (
      <section className="apartmentComponent">
        <div className="textDiv" onClick={przekierujNaInnaStrone}>
          <p className="text">{aptName}</p>
          <div className="goldenArrow"></div>
        </div>
        <div
          style={styles}
          className="aptComImg"
          onClick={przekierujNaInnaStrone}
        ></div>
      </section>
    );
  }
}

export default ApartmentComponent;
