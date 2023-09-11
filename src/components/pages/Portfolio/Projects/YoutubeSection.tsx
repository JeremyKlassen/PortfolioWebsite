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
      <h2>
        This demo video goes over various projects I have made in the past 2
        years
      </h2>
      {windowWidth > 768 ? (
        <Youtube />
      ) : (
        <>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Youtube video of some of Jeremy's projects"
            href="https://www.youtube.com/embed/C2pgh6bj2Nc"
          >
            <h2>
              Your screen is not wide enough for the embeded video. Please
              rotate if using a phone or table.
            </h2>
          </a>
        </>
      )}

      <ul>
        <li>
          <strong>Log Tracking Software:</strong> (1:44) - I completed a Group
          Home Log Submission app I coded in Python. This project can be adapted
          to suit many needs.
        </li>
        <li>
          <strong>Bullying Data Analysis</strong> (11:40) - This was put
          together using data from the World Health Organization (through their
          GSHS program). The attachments provided are outputs of the Notebooks.
          I go through it in detail in the youtube video.
          <ol>
            <li>
              This showcases the use of Jupyter Notebooks (an Industry Standard
              for Academic programming).
            </li>
            <li>
              It showcases how data can be worked with in a way that is safer,
              and more transparent way than traditional spreadsheets.
            </li>
            <li>
              Uses of Artificial Intelligence to discover insights into data
            </li>
            <li>
              Showcases the use of Python, Markdown, and HTML programming/markup
              languages.
            </li>
          </ol>
        </li>
        <li>
          <strong>Data Visualizations</strong> (30:08) - I go through some
          Tableau dashboards that I made. They show data visualization in
          action.
        </li>
      </ul>
    </section>
  );
};

export default YoutubeSection;
