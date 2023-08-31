import { useEffect, useState } from "react";
import Youtube from "../Youtube";
import styles from "./YoutubeSection.module.css";

const YoutubeSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className={styles.youtubeContainer}>
      <h2>This video goes over several parts of my portfolio</h2>
      {windowWidth > 768 ? (
        <Youtube />
      ) : (
        <>
          <a href="https://www.youtube.com/embed/C2pgh6bj2Nc">
            <h2>
              Link to Portfolio Project Video (for an embeded video, use
              landscape mode).
            </h2>
          </a>
        </>
      )}
      <ul>
        <li>
          I completed a Group Home Log Submission app. It was coded with Python,
          and the contents of this can be iterated upon in near-limitless ways.
          I will upload the code to a private GitHub repository in the next few
          days. I can provide the link if there are people interested in looking
          through the code.{" "}
        </li>
        <li>
          I did a data analysis of a Bullying dataset that was put together by
          the World Health Organization (through their GSHS program). The
          attachments provided are outputs of the Notebooks. I go through it in
          detail in the youtube video.
          <ol>
            <li>
              This showcases the use of Jupyter Notebooks which is the Industry
              Standard for Academic programming.
            </li>
            <li>
              Showcases how data can be worked with in a safer, and more
              transparent way than with spreadsheets.
            </li>
            <li>
              Use of Artificial Intelligence to discover insights into data
            </li>
            <li>
              Showcases the use of Python, Markdown, and HTML programming/markup
              languages.
            </li>
          </ol>
        </li>
        <li>
          I go through some of last year's Tableau dashboards that I made. They
          show how data visualization in action.
        </li>
      </ul>
    </section>
  );
};

export default YoutubeSection;
