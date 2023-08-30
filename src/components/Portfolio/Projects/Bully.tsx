import { Link } from "react-router-dom";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import styles from "./Bully.module.css";

const Bully = () => {
  return (
    <section id="bullyPortfolio" className={styles.bullyContainer}>
      <h1>Bully Dataset Machine Learning Analysis</h1>
      <p>
        One of my proud accomplishments is my comprehensive data analysis
        project that delves into a bullying dataset. In this project, I explored
        the data, identified trends, and performed statistical analyses to
        uncover hidden patterns. I leveraged Python for data manipulation and
        visualization, showcasing my skills in tools like Pandas, Matplotlib,
        and Seaborn.
      </p>
      <Link className={styles.bullyAnalysis} to={"/Bully"}>
        <BsFillFileBarGraphFill size={100} color={"white"} />
      </Link>
    </section>
  );
};

export default Bully;
