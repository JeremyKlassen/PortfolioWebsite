import { useEffect, useState } from "react";
import ThreePointStoryTableau from "../Embeds/ThePointStoryTableau";
import styles from "./ThreePointStory.module.css";

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
    <>
      <section id={styles.tableauPortfolio} className={styles.tableauContainer}>
        <h2>Three Point Story</h2>
        <p>
          Discover my Tableau profile where I've crafted interactive data
          visualizations that bring data stories to life. From dashboards to
          exploratory analyses, my Tableau projects demonstrate my proficiency
          in creating engaging and informative visualizations.
        </p>
      </section>
      <section>
        {windowWidth > 1287 ? (
          <ThreePointStoryTableau />
        ) : (
          <h2>
            Make your browser screen wider to view this visualization. If you
            are using a phone, rotate it into landscape mode.
          </h2>
        )}
      </section>
    </>
  );
};

export default ThreePointStory;
