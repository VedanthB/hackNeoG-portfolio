import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Header } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  );
};

export default App;
