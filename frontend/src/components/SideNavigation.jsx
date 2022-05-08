import React from "react";

let links = ["home", "about", "work", "skills", "blogs", "contact"];

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {links.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#313BAC" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
