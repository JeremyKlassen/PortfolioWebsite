import styles from "./ThreePointStory.module.css";
import ThreePointStoryTableau from "../Embeds/ThePointStoryTableau";
import { useEffect, useState } from "react";

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
      <h2>Three Point Story</h2>
      <p>
        This interactive data story was developed using a system called Tableau.
        This and other data-visualization systems like Microsoft's Power Bi can
        turn your data into useful charts, stories and dashboards. For more of
        my Tableau portfolio see my link in the footer.
      </p>
      {windowWidth > 992 ? (
        <ThreePointStoryTableau />
      ) : (
        <h2>
          Your screen is not wide enough for this embedded dashboard. If using a
          phone, try rotating to landscape.
        </h2>
      )}
    </section>
  );
};

export default ThreePointStory;
