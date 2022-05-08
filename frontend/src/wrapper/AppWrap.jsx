import React from "react";
import { SideNavigation, SocialMediaLinks } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMediaLinks />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 VEDANTH</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <SideNavigation active={idName} />
      </div>
    );
  };

export default AppWrap;
