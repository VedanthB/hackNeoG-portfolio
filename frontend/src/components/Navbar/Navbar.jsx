import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

let links = ["home", "about", "work", "skills", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a href="/" className="app__navbar-logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name"> vedanth bora </span>
        <span className="grey-color">/&gt;</span>
      </a>

      <ul className="app__navbar-links">
        {links.map((link) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <div />
            <a href={`#${link}`}> {link} </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {links.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
