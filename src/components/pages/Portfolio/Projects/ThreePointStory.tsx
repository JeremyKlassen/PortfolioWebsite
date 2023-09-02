import { useEffect, useState } from "react";
import styles from "./ThreePointStory.module.css";
import ThreePointStoryTableau from "../Embeds/ThePointStoryTableau";

const ThreePointStory = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id={styles.tableauPortfolio} className={styles.tableauContainer}>
      <p>
        Discover my Tableau profile where I've crafted interactive data
        visualizations that bring data stories to life. From dashboards to
        exploratory analyses, my Tableau projects demonstrate my proficiency in
        creating engaging and informative visualizations.
      </p>
      {/* {windowWidth > 768 ? (
        <ThreePointStoryTableau />
      ) : (
        <h2>
          If you are using a phone, rotate into landscape mode to view this
          DataViz
        </h2>
      )} */}
      <ThreePointStoryTableau />
    </section>
  );
};

export default ThreePointStory;
