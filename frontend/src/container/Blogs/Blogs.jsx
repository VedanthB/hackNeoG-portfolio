import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Blogs.scss";

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "blogs"]';

    client.fetch(query).then((data) => {
      setBlogs(data);
    });
  }, []);

  return (
    <>
      {blogs.length && (
        <>
          <div className="app__blogs-item app__flex">
            <div className="app__blogs-content">
              <p className="p-text">{blogs[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{blogs[currentIndex].name}</h4>
                <h5 className="p-text">{blogs[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__blogs-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? blogs.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === blogs.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Blogs, "app__blogs"),
  "blogs",
  "app__primarybg"
);
