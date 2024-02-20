import "./App.scss";
import "./styles/reset.scss";
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Components/MainPage/MainPage";
import Apartments from "./Components/Apartments/Apartments";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Apartments" element={<Apartments />} />
          <Route path="/Apartment1" element={<Apartments />} />
          <Route path="/Apartment2" element={<Apartments />} />
          <Route path="/Apartment3" element={<Apartments />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
