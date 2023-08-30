import styles from "./GithubSection.module.css";
import Github from "../../SocialMedia/Github";

const GithubSection = () => {
  return (
    <section id="githubPortfolio" className={styles.githubContainer}>
      <h2>Github Profile</h2>
      <div className={styles.gitLogo}>
        <Github size={5} />
      </div>
      <p>
        Github is where I keep the code I write that I want to show to others.
        Feel free to explore my Github Profile to view some of my projects. I've
        developed a range of data-centric repositories, showcasing my ability to
        clean, analyze, and visualize data effectively. Most are written in
        Python, and some are written in Javascript or Typescript.
      </p>
    </section>
  );
};

export default GithubSection;
