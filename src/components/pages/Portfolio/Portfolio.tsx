import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import ContactForm from "../../ui/Connect/ContactForm";

import { useState } from "react";
import ToggleProjects from "./ToggleProjects";
import Website from "./Projects/Website";
import ThreePointStory from "./Projects/ThreePointStory";
import Bully from "./Projects/Bully";
import YoutubeSection from "./Projects/YoutubeSection";
import GithubSection from "./Projects/GithubSection";
import { HashLink } from "react-router-hash-link";
import LandAcknowledgement from "../../ui/LandAcknowldement/LandAcknowledgement";
import PWA from "./Projects/PWA";

const Portfolio = () => {
  const [accordianBools, setBools] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className={styles.portfolioDiv}>
      <section className="portfolioHeading">
        <h1>Portfolio Projects</h1>
        <p>
          Welcome to my Data Specialist portfolio! If you have questions about a
          project, or think you could use something similar to one of my
          creations,{" "}
          <HashLink smooth to={"/Portfolio#contact"}>
            then please get in touch with me.
          </HashLink>
        </p>
      </section>
      <div className={styles.accordian}>
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={0}
          label="Progressive Web Application"
        />
        {accordianBools[0] ? <PWA /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={1}
          label="This Website"
        />
        {accordianBools[1] ? <Website /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={2}
          label="Tableau Three Point Story"
        />
        {accordianBools[2] ? <ThreePointStory /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={3}
          label="Bully Dataset Analysis"
        />
        {accordianBools[3] ? <Bully /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={4}
          label="Youtube Projects Demo"
        />
        {accordianBools[4] ? <YoutubeSection /> : <></>}
        <ToggleProjects
          accordianBools={accordianBools}
          setBools={setBools}
          slot={5}
          label="Github Projects"
        />
        {accordianBools[5] ? <GithubSection /> : <></>}
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
      <LandAcknowledgement />
    </div>
  );
};

export default Portfolio;
