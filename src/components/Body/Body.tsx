import React from "react";
import Home from "../Home/Home";
import styles from "./Body.module.css";
import About from "../About/About";
import Services from "../Services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Thanks from "../Thanks/Thanks";

interface Props {
  page: string;
}

const Body: React.FC<Props> = ({ page }) => {
  let toRender: React.ReactNode = null;

  switch (page) {
    case "home":
      toRender = <Home />;
      break;
    case "About":
      toRender = <About />;
      break;
    case "Services":
      toRender = <Services />;
      break;
    case "Portfolio":
      toRender = <Portfolio />;
      break;
    case "Thanks":
      toRender = <Thanks />;
      break;
    default:
      toRender = <Home />;
      break;
  }

  return <div className={styles.main}>{toRender}</div>;
};

export default Body;
