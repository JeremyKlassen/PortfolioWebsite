import { Link } from "react-router-dom";
import styles from "./Bully.module.css";
import { useState } from "react";
import BullyAnalysis from "../Embeds/BullyAnalysis";

const Bully = () => {
  const [isBullyAnalysis, setBullyAnalysis] = useState(false);
  const handleClick = () => {
    setBullyAnalysis(!isBullyAnalysis);
  };
  return (
    <section id="bullyPortfolio" className={styles.bullyContainer}>
      <div className="bullyDiv">
        <h2>Bully Dataset Machine Learning Analysis</h2>
        <p>
          One of my proud accomplishments is my comprehensive data analysis
          project that delves into a bullying dataset. In this project, I
          explored the data, identified trends, and performed statistical
          analyses to uncover hidden patterns. I leveraged Python for data
          manipulation and visualization, showcasing my skills in tools like
          Pandas, Matplotlib, and Seaborn.
        </p>
      </div>
      <Link className={styles.bullyAnalysis} onClick={handleClick} to={""}>
        {isBullyAnalysis
          ? "Hide Bully Dataset Analysis"
          : "Show Bully Dataset Analysis"}
      </Link>
      {isBullyAnalysis ? <BullyAnalysis /> : <></>}
    </section>
  );
};

export default Bully;
