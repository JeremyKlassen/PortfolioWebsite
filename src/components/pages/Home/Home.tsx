import styles from "./Home.module.css";
import TextPictureRight from "../../ui/TextPictureRight/TextPictureRight";
import jeremy5 from "../../../assets/selfies/jeremy5.jpeg";
import { HashLink } from "react-router-hash-link";
import ContactForm from "../../ui/Connect/ContactForm";
import DataIcons from "./DataIcons";
import ChartIcons from "./ChartIcons";
import hero from "../../../assets/hero.jpg";
import LandAcknowledgement from "../../ui/LandAcknowldement/LandAcknowledgement";

const Home = () => {
  return (
    <div className={styles.homeDiv}>
      <div className={styles.heroContainer}>
        <img
          className={styles.heroImg}
          src={hero}
          alt="desktop code hero banner"
        />
        <section className={styles.landing}>
          <div className={styles.hero}></div>
          <div className={styles.tagline}>
            <h2>Automate Boring and Tedious Tasks.</h2>
            <h3>They Cost You Money, and Steal Time From Frontline Staff</h3>
          </div>
          <div className={styles.landingContent}>
            <h2>Do you: </h2>
            <ul className={styles.landingList}>
              <li>Need an application developed?</li>
              <li>
                Have a boring repetitive task that you or your staff do every
                day?
              </li>
              <li>Need a website developed?</li>
              <li>Have data related questions?</li>
              <li>
                Have stakeholders in your company that need a range of different
                questions answered?
              </li>
            </ul>
            <p>
              If any of these questions strike a chord, then I'd love to help.{" "}
              <HashLink smooth to={"/Home#contact"}>
                Tell me your organization’s story.
              </HashLink>
            </p>
          </div>
        </section>
      </div>
      <section className={styles.guided}>
        <h2 className={styles.bg1H1}>Ethics-Based Data Exploration</h2>
        <p className={styles.bg1P}>
          My two decades of youthwork have taught me how important and sensitive
          your information is. Ethical use of the data your employees and
          clients entrust to you is something I take very seriously.
        </p>
        <div className={styles.bg1Pic}>
          <DataIcons />
        </div>
      </section>
      <section className={styles.background2}>
        <h2>Trends and Insights</h2>
        <div className={styles.background2P}>
          <p>
            Finding trends and illustrating them is something I specialize in.
            My complex combination of education and experience allows me to
            identify key data points for you. Together we can also decide what
            kind of data you should be tracking in the future.
          </p>
        </div>
        <div className={styles.chartsContainer}>
          <ChartIcons />
        </div>
      </section>
      <div className={styles.differenceDiv}>
        <TextPictureRight
          heading="Together, Let's Make a Difference"
          textBlock="Thank you for joining me on this journey. Whether you share
          my passion for data's transformative power or simply wish to explore,
          I invite you to connect. Together, lets turn raw pieces of information into positive
          change. Look at my projects, delve into my story,
          and work with me towards a brighter future."
          picUrl={jeremy5}
        />
      </div>
      <ContactForm />
      <LandAcknowledgement />
    </div>
  );
};

export default Home;
