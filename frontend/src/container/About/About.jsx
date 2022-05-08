import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { useTheme } from "../../context";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2
        className={`${
          theme === "light" ? "head-text" : "head-text white-color"
        }`}
      >
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-card"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className={`${
                theme === "light" ? "bold-text" : "bold-text white-color"
              }`}
              style={{ marginTop: 20 }}
            >
              {about.title}
            </h2>
            <p
              className={`${
                theme === "light" ? "p-text" : "p-text white-color"
              }`}
              style={{ marginTop: 10 }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
