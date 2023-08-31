import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import ContactForm from "../../ui/Connect/ContactForm";
import Website from "./Projects/Website";
import ThreePointStory from "./Projects/ThreePointStory";
import Bully from "./Projects/Bully";
import YoutubeSection from "./Projects/YoutubeSection";
import GithubSection from "./Projects/GithubSection";
import ToggleProjects from "./ToggleProjects";
import { useState } from "react";

const Portfolio = () => {
  const [accordianBools, setBools] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className={styles.portfolioDiv}>
      <section className="portfolioHeading">
        <h1>Jeremy's Portfolio Projects</h1>
        <p>
          Welcome to my Data Specialist portfolio! I'm especially proud of this
          website
        </p>
      </section>
      <div className={styles.accordian}>
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={0}
          label="This Website"
        />
        {accordianBools[0] ? <Website /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={1}
          label="Tableau Three Point Story"
        />
        {accordianBools[1] ? <ThreePointStory /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={2}
          label="Bully Dataset Analysis"
        />
        {accordianBools[2] ? <Bully /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={3}
          label="Youtube Overview of Various Projects"
        />
        {accordianBools[3] ? <YoutubeSection /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={4}
          label="Github Projects"
        />
        {accordianBools[4] ? <GithubSection /> : <></>}
      </div>
      <section className={styles.getInTouch}>
        <p>
          Thank you for taking the time to explore my Data Specialist portfolio.
          If you're interested in collaborating, have any questions, or want to
          learn more about my projects, please don't hesitate to{" "}
          <Link to="/Contact">get in touch.</Link>
        </p>
      </section>
      <ContactForm />
    </div>
  );
};

export default Portfolio;