import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./src/assets/profile.jpg";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
