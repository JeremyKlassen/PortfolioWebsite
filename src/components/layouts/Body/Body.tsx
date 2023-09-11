import React from "react";
import Home from "../../pages/Home/Home";
import styles from "./Body.module.css";
import About from "../../pages/About/About";
import Services from "../../pages/Services/Services";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Thanks from "../../pages/Thanks/Thanks";
import Error from "../../pages/Error/Error";

interface Props {
  page: string;
}

const Body: React.FC<Props> = ({ page }) => {
  let toRender: React.ReactNode = null;

  switch (page) {
    case "Home":
      toRender = <Home />;
      break;
    case "About":
      toRender = <About />;
      break;
    case "Services":
      toRender = <Services />;
      break;
    case "Thanks":
      toRender = <Thanks />;
      break;
    case "Portfolio":
      toRender = <Portfolio />;
      break;
    default:
      toRender = <Error />;
      break;
  }

  return <div className={styles.main}>{toRender}</div>;
};

export default Body;
