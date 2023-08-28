import styles from "./Home.module.css";
import TextPictureRight from "../TextPictureRight/TextPictureRight";
import jeremy5 from "../../assets/selfies/jeremy5.jpeg";
import DataIcons from "./DataIcons";
import { HashLink } from "react-router-hash-link";
import ChartIcons from "./ChartIcons";
import ContactForm from "../Connect/ContactForm";

const Home = () => {
  return (
    <>
      <section className={styles.landing}>
        <h1>Web Solutions for Your Business</h1>
        <div className={styles.landingContent}>
          <h2>Do you: </h2>
          <ul className={styles.landingList}>
            <li>Have data related questions?</li>
            <li>Need a website developed?</li>
            <li>Need a web application developed?</li>
            <li>
              Have a information sitting in storage cabinets or spreadsheets
              that you don’t know what to do with?
            </li>
          </ul>
          <p>
            If any of these questions strike a chord, then{" "}
            <HashLink smooth to={"/Home#contact"}>
              tell me more about your organization’s story.
            </HashLink>
          </p>
        </div>
      </section>
      <section className={styles.guided}>
        <h1 className={styles.bg1H1}>Ethics-Based Data Exploration</h1>
        <p className={styles.bg1P}>
          My two decades of youthwork have taught me how important and sensitive
          your information is. Ethical use of the data your employees and
          clients have entrusted to you is something I take very seriously.
        </p>
        <div className={styles.bg1Pic}>
          <DataIcons />
        </div>
      </section>
      <section className={styles.background2}>
        <h1>Trends and Insights</h1>
        <p>
          Finding trends and illustrating them is something I am good at. My
          complex combination of education and experience allows me to identify
          key data points for you. Together we can also decide what kind of data
          you should be tracking in the future.
        </p>
        <div className={styles.chartsContainer}>
          <ChartIcons />
        </div>
      </section>
      <TextPictureRight
        heading="Together, Let's Make a Difference"
        textBlock="Thank you for joining me on this journey. Whether you share
          my passion for data's transformative power or simply wish to explore,
          I invite you to connect. Together, lets turn raw data into positive
          change. Look at my projects, delve into my story,
          and work with me towards a brighter future."
        picUrl={jeremy5}
      />
      <ContactForm />
    </>
  );
};

export default Home;
