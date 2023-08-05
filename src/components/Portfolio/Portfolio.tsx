import Github from "../SocialMedia/Github";
import bully from "../../assets/BullyingPrediction.pdf";
import Tableau from "../SocialMedia/Tableau";

const Portfolio = () => {
  return (
    <>
      <h1>Jeremy's Portfolio Projects</h1>
      <p>
        Welcome to my Data Specialist portfolio! I'm passionate about harnessing
        the power of data to extract valuable insights and make informed
        decisions. Below, you'll find a glimpse of my skills and projects that
        highlight my expertise:
      </p>

      <div className="githubContainer">
        <p>
          Feel free to explore my Github Profile to view some of my projects.
          I've developed a range of data-centric repositories, showcasing my
          ability to clean, analyze, and visualize data effectively. Most are
          written in Python, and some are written in Javascript or Typescript.
        </p>
        <Github size={3} />
      </div>

      <div className="tableauContainer">
        <p>
          Discover my Tableau profile where I've crafted interactive data
          visualizations that bring data stories to life. From dashboards to
          exploratory analyses, my Tableau projects demonstrate my proficiency
          in creating engaging and informative visualizations.
        </p>
        <Tableau size={3} />
      </div>
      <div className="byllyContainer">
        <p>
          One of my proud accomplishments is my comprehensive data analysis
          project that delves into a bullying dataset. In this project, I
          explored the data, identified trends, and performed statistical
          analyses to uncover hidden patterns. I leveraged Python for data
          manipulation and visualization, showcasing my skills in tools like
          Pandas, Matplotlib, and Seaborn.
        </p>
        <iframe src={bully}></iframe>
      </div>
      <p>
        You're currently on my portfolio website, which serves as a testament to
        my technical abilities. I've built this website using modern web
        technologies like React, showcasing my capability to combine data with
        front-end development for a seamless user experience.
      </p>
      <p>
        Thank you for taking the time to explore my Data Specialist portfolio.
        If you're interested in collaborating, have any questions, or want to
        learn more about my projects, please don't hesitate to{" "}
        <a href="mailto:test@test.com">get in touch.</a>
      </p>
    </>
  );
};

export default Portfolio;
