import React, { Component } from "react";
import "./Location.scss";

class Location extends Component {
  render() {
    return (
      <section className="location">
        <div className="textDiv">
          <p className="title">Lokalizacja</p>
          <div className="orangeLine"></div>
          <p className="text">
            Nasze apartamenty nie tylko zachwycają wygodą, ale także oferują
            doskonałą lokalizację. Znajdują się blisko wszelkich atrakcji,
            restauracji i sklepów, umożliwiając Ci łatwy dostęp do wszystkiego,
            co miasto ma do zaoferowania. Odkrywaj zabytki, smakuj lokalne
            kulinaria i ciesz się wyjątkowym położeniem naszych apartamentów,
            gdzie wszędzie jest blisko, a każdy zakątek miasta staje się łatwo
            dostępny.
          </p>
        </div>
        <div className="locationDiv">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.7327712373366!2d20.71611821400396!3d50.46295117975855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c318b603749b%3A0x7c2c791c19b52654!2sApartamenty%20Przy%20T%C4%99%C5%BCni!5e0!3m2!1spl!2spl!4v1706817705874!5m2!1spl!2spl"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  }
}

export default Location;
