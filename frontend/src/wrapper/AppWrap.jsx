import React from "react";
import { SideNavigation, SocialMediaLinks } from "../components";
import { useTheme } from "../context";
import { myDetails } from "../portfolio";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { theme } = useTheme();

    return (
      <div
        id={idName}
        className={`app__container ${
          theme === "light" ? "app__primarybg" : "app__darkbg"
        } ${classNames}`}
      >
        <SocialMediaLinks />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p
              className={`${
                theme === "light" ? "p-text" : "p-text white-color"
              }`}
            >
              @2022 {myDetails.firstName.toUpperCase()}
            </p>
            <p
              className={`${
                theme === "light" ? "p-text" : "p-text white-color"
              }`}
            >
              All rights reserved
            </p>
          </div>
        </div>
        <SideNavigation active={idName} />
      </div>
    );
  };

export default AppWrap;
