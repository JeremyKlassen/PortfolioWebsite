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
      <h2>Python Machine Learning Data Analysis</h2>
      <p>
        This Analysis looks at school bullying data from the W.H.O's Global
        Student Health Survey. It uses a variety of Statistical and Machine
        Learning techniques to pull insights from the data.
      </p>

      <p>
        Note how these kinds of reports give you clear graphs, conclusions, and
        the code that was used to produce the results, nothing is hidden. These
        reports can be produced with the code hidden as well if requested.
      </p>
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
