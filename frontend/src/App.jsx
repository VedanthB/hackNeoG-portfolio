import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Blogs, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Blogs />
    </div>
  );
};

export default App;
