import "./App.scss";
import "./styles/reset.scss"
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import MainPage from "./Components/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
