import styles from "./ThreePointStory.module.css";
import ThreePointStoryTableau from "../Embeds/ThePointStoryTableau";

const ThreePointStory = () => {
  return (
    <section id={styles.tableauPortfolio} className={styles.tableauContainer}>
      <h2>Three Point Story</h2>
      <p>
        This interactive data story was developed using a system called Tableau.
        This and other data-visualization systems like Microsoft's Power Bi can
        turn your data into useful charts, stories and dashboards. For more of
        my Tableau portfolio see my link in the footer.
      </p>
      <ThreePointStoryTableau />
    </section>
  );
};

export default ThreePointStory;
