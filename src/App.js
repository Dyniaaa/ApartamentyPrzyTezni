import "./App.scss";
import "./styles/reset.scss";
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Components/MainPage/MainPage";
import Apartments from "./Components/Apartments/Apartments";
import Contact from "./Components/Contact/Contact";
import ApartmentPage from "./Components/Apartments/ApartmentsList/ApartmentPage/ApartmentPage";

class App extends Component {
  render() {
    const imagesApt11 = [
      "/Images/1.png",
      "/Images/2.png",
      "/Images/3.png",
      "/Images/4.png",
      "/Images/5.png",
      "/Images/6.png",
    ];

    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Apartments" element={<Apartments />} />
          <Route
            path="/Apartment1"
            element={
              <ApartmentPage
                AptName={"Apartament 1.1"}
                ImagesList={imagesApt11}
              />
            }
          />
          <Route
            path="/Apartment2"
            element={
              <ApartmentPage
                AptName={"Apartament 1.2"}
                ImagesList={imagesApt11}
              />
            }
          />
          <Route
            path="/Apartment3"
            element={
              <ApartmentPage
                AptName={"Apartament 1.3"}
                ImagesList={imagesApt11}
              />
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
