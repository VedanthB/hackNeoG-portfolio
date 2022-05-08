import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </div>
  );
};

export default App;
