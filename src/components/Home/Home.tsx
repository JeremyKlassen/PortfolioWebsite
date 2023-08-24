import styles from "./Home.module.css";
import TextPictureLeft from "../TextPictureLeft/TextPictureLeft";
import TextPictureRight from "../TextPictureRight/TextPictureRight";
import bridge from "../../assets/bridge.jpg";
import jeremy5 from "../../assets/selfies/jeremy5.jpeg";
import DataIcons from "./DataIcons";
import { GiBeard } from "react-icons/gi";
import ChartIcons from "./ChartIcons";

const Home = () => {
  return (
    <>
      <section className={styles.landing}>
        <h1>Data Solutions for Business Questions</h1>
        <p>
          Do you have a Question about why something is happening with your
          organization? Maybe you have a bunch of spreadsheets or documents that
          you don’t know what to do with. Maybe you’ve heard about the benefits
          of data tracking but have no idea where to start. If any of these
          questions strikes a chord then I would love to hear more about your
          organization’s story.
        </p>
        <div className={styles.dataIconsContainer}>
          <DataIcons />
        </div>
      </section>
      <section className={styles.guided}>
        <div className={styles.background1}>
          <h1 className={styles.bg1H1}>Ethics-Based Data Exploration</h1>
          <p className={styles.bg1P}>
            I’ve spent two decades in youthwork. One thing I’ve learned in that
            time is how important and sensitive your information is. Figuring
            out how to ethically use and manage the data your employees and
            clients have entrusted to you is something to be taken very
            seriously.
          </p>
          <div className={styles.bg1Pic}>
            <GiBeard size={100} />
          </div>
        </div>
      </section>
      <section className={styles.background2}>
        <h1>Trends and Insights</h1>
        <p>
          Finding trends and figuring out how to illustrate them through simple
          charts and graphs is something I am good at. I have a complex
          combination of education and experience. This allows me to identify
          key items in data. It also allows me to help you decide what kind of
          data you should be tracking in the future.
        </p>
        <div className={styles.chartsContainer}>
          <ChartIcons />
        </div>
      </section>
      <TextPictureRight
        heading="Together, Let's Make a Difference"
        textBlock="Thank you for joining me on this journey. Whether you share
          my passion for data's transformative power or simply wish to explore,
          I invite you to connect. Together, we can turn raw data into positive
          change. Look at my projects, delve into my story,
          and let's work towards a brighter future together."
        picUrl={jeremy5}
      />
    </>
  );
};

export default Home;
