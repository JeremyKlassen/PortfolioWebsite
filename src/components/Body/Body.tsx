import React from "react";
import Home from "../Home/Home";
import styles from "./Body.module.css";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

interface Props {
  page: string;
}

const Body: React.FC<Props> = ({ page }) => {
  let toRender: React.ReactNode = null;

  switch (page) {
    case "home":
      toRender = <Home />;
      break;
    case "About Me":
      toRender = <About />;
      break;
    case "Services":
      toRender = <Services />;
      break;
    case "Contact":
      toRender = <Contact />;
      break;
    case "Portfolio":
      toRender = <Portfolio />;
      break;
    default:
      toRender = <Home />;
      break;
  }

  return <div className={styles.main}>{toRender}</div>;
};

export default Body;
