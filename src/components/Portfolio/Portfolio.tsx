import Github from "../SocialMedia/Github";
import Tableau from "../SocialMedia/Tableau";
import styles from "./Portfolio.module.css";
import { Link } from "react-router-dom";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import ReactLogo from "../SocialMedia/ReactLogo";

const Portfolio = () => {
  return (
    <>
      <section className="portfolioHeading">
        <h1>Jeremy's Portfolio Projects</h1>
        <h2>
          All logos on this page are clickable links that lead you to different
          parts of my portfolio.
        </h2>
        <p>
          Welcome to my Data Specialist portfolio! Every section below has a
          clickable icon or picture that will take you to a different section of
          my portfolio. In addition to these sections, I also wrote this entire
          website. It was written in using React, the library Facebook created
          for making highly interactive websites.
        </p>
      </section>
      <section id="bullyPortfolio" className={styles.bullyContainer}>
        <h2>Bully Dataset Machine Learning Analysis</h2>
        <p>
          One of my proud accomplishments is my comprehensive data analysis
          project that delves into a bullying dataset. In this project, I
          explored the data, identified trends, and performed statistical
          analyses to uncover hidden patterns. I leveraged Python for data
          manipulation and visualization, showcasing my skills in tools like
          Pandas, Matplotlib, and Seaborn.
        </p>
        <Link className={styles.bullyAnalysis} to={"/Bully"}>
          <BsFillFileBarGraphFill size={100} color={"white"} />
        </Link>
      </section>
      <section className={styles.thisWebsiteContainer}>
        <h2>This Website!</h2>
        <p>
          This website isn’t some template I found off Wordpress, it is a
          project crafted from the ground up. It was{" "}
          <strong>developed using React</strong>, the premiere coding library
          developed by Facebook, for creating highly advanced web platforms.{" "}
          <strong>
            These platforms include Facebook, Instagram, Airbnb, Netflix,
            WhatsApp, Twitter, Uber, Hulu… and many many more.
          </strong>
          It is also an excellent platform for building custom data web app
          solutions.
        </p>
        <div className={styles.reactLogoContainer}>
          <ReactLogo size={5} />
        </div>
      </section>

      <section className={styles.youtubeContainer}>
        <h2>
          Here is a youtube video that goes over several parts of my portfolio
        </h2>
        <div className={styles.youtubeVideo}>
          <iframe
            width="560"
            height="315"
            // width="480"
            // height="360"
            src="https://www.youtube.com/embed/C2pgh6bj2Nc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <ul>
          <li>
            I completed a Group Home Log Submission app. It was coded with
            Python, and the contents of this can be iterated upon in
            near-limitless ways. I will upload the code to a private GitHub
            repository in the next few days. I can provide the link if there are
            people interested in looking through the code.{" "}
          </li>
          <li>
            I did a data analysis of a Bullying dataset that was put together by
            the World Health Organization (through their GSHS program). The
            attachments provided are outputs of the Notebooks. I go through it
            in detail in the youtube video.
            <ol>
              <li>
                This showcases the use of Jupyter Notebooks which is the
                Industry Standard for Academic programming.
              </li>
              <li>
                Showcases how data can be worked with in a safer, and more
                transparent way than with spreadsheets.
              </li>
              <li>
                Use of Artificial Intelligence to discover insights into data
              </li>
              <li>
                Showcases the use of Python, Markdown, and HTML
                programming/markup languages.
              </li>
            </ol>
          </li>
          <li>
            I go through some of last year's Tableau dashboards that I made.
            They show how data visualization in action.
          </li>
        </ul>
      </section>
      <section id="githubPortfolio" className={styles.githubContainer}>
        <h2>Github Profile</h2>
        <div className={styles.gitLogo}>
          <Github size={5} />
        </div>
        <p>
          Github is where I keep the code I write that I want to show to others.
          Feel free to explore my Github Profile to view some of my projects.
          I've developed a range of data-centric repositories, showcasing my
          ability to clean, analyze, and visualize data effectively. Most are
          written in Python, and some are written in Javascript or Typescript.
        </p>
      </section>
      <section id="tableauPortfolio" className={styles.tableauContainer}>
        <p>
          Discover my Tableau profile where I've crafted interactive data
          visualizations that bring data stories to life. From dashboards to
          exploratory analyses, my Tableau projects demonstrate my proficiency
          in creating engaging and informative visualizations.
        </p>
        <div className={styles.tableauLogo}>
          <Tableau size={3} />
        </div>
      </section>
      <section className={styles.getInTouch}>
        <p>
          Thank you for taking the time to explore my Data Specialist portfolio.
          If you're interested in collaborating, have any questions, or want to
          learn more about my projects, please don't hesitate to{" "}
          <Link to="/Contact">get in touch.</Link>
        </p>
      </section>
    </>
  );
};

export default Portfolio;
