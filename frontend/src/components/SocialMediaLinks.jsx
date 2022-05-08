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
import { myDetails } from "../portfolio";

const SocialMedia = () => (
  <div className="app__social">
    <a href={myDetails.twitter} target="_blank" rel="noreferrer">
      <BsTwitter />
    </a>
    <a href={myDetails.github} target="_blank" rel="noreferrer">
      <BsGithub />
    </a>
    <a href={myDetails.linkedIn} target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href={myDetails.stackOverflow} target="_blank" rel="noreferrer">
      <BsStackOverflow />
    </a>
    <a href={myDetails.codeSandBox} target="_blank" rel="noreferrer">
      <FiCodesandbox />
    </a>
    <a href={myDetails.devToBlogs} target="_blank" rel="noreferrer">
      <FaDev />
    </a>
    <a href={myDetails.replIt} target="_blank" rel="noreferrer">
      <SiReplit />
    </a>
  </div>
);

export default SocialMedia;
