/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Avin Mantri",
  title: "Computer Science Major",
  email: "avin.workspace@gmail.com",
  gitHub: "https://github.com/Nooby-Sandwich",
  instagram: "https://www.instagram.com/mantriavin/",
  linkedIn: "https://www.linkedin.com/in/avin-mantri/",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};

const primaryColor = "#4E567E"; // Dark Blue
const secondaryColor = "#6F5";  // Green

// Contrasting colors:
const contrastingPrimaryColor = "#F2C94C";  // Golden Yellow
const contrastingSecondaryColor = "#EB5757";  // Red

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
