import React from "react";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsStackOverflow,
} from "react-icons/bs";

import { FiCodesandbox } from "react-icons/fi";

import { FaDev } from "react-icons/fa";

import { SiReplit } from "react-icons/si";

const SocialMedia = () => (
  <div className="app__social">
    <a href="/" target="_blank" rel="noreferrer">
      <BsTwitter />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <BsStackOverflow />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <FiCodesandbox />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <FaDev />
    </a>
    <a href="/" target="_blank" rel="noreferrer">
      <SiReplit />
    </a>
  </div>
);

export default SocialMedia;
