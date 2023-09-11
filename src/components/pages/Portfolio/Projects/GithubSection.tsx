import styles from "./GithubSection.module.css";
import Github from "../../../ui/SocialMedia/Github";

const GithubSection = () => {
  return (
    <section id="githubPortfolio" className={styles.githubContainer}>
      <h2>Github Profile</h2>
      <p>
        Github is where I keep a lot of the code I write. Feel free to explore
        my Profile and star some of my projects. I've developed a range of
        data-centric repositories, showcasing my ability to clean, analyze, and
        visualize data effectively. Most are written in Python, and
        JavaScript/Typescript.
      </p>
      <div className={styles.gitLogo}>
        <Github size={5} />
      </div>
    </section>
  );
};

export default GithubSection;
