import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Blogs, Footer, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
