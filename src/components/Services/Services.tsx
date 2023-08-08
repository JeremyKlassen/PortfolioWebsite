import TextPictureLeft from "../TextPictureLeft/TextPictureLeft";
import TextPictureRight from "../TextPictureRight/TextPictureRight";
import styles from "./Services.module.css";
import features from "../../assets/charts/features.png";
import chi from "../../assets/charts/chiSquare.png";
import jeremy8 from "../../assets/selfies/jeremy8.jpg";

const Services = () => {
  return (
    <>
      <TextPictureLeft
        heading="Empowering Change Through Full Stack Data Services"
        textBlock="In the realm of data empowerment, I offer a comprehensive suite of
          services that bridge the gap between raw information and meaningful
          impact. As a dedicated Youth Worker, Programmer, and Data Enthusiast,
          I bring a unique perspective to the table – one that combines
          technical prowess with a heart for positive change."
        picUrl={jeremy8}
      />
      <section className={styles.section1}>
        <div className={styles.lBackground1}>
          <div className={styles.rBackground1}>
            <h1>1. Data Insight Collaboration</h1>
            <p>
              I collaborate closely with front-line workers to ethically
              identify and understand the data that holds the potential to
              transform your initiatives. By working hand in hand, we can
              navigate the ethical landscape of data tracking, ensuring that
              every data point collected serves a purpose, respects privacy, and
              drives progress.
            </p>
          </div>
        </div>
      </section>
      <TextPictureRight
        heading="2. Full Stack Data Solutions"
        textBlock="From inception to implementation, I offer end-to-end data solutions
          that encompass the full data stack. Whether it's data collection,
          processing, analysis, or visualization, my expertise spans the
          spectrum. I harness the power of Python, JavaScript, and more to craft
          systems that not only streamline data but also amplify its impact."
        picUrl={chi}
      />

      <section className={styles.section3}>
        <div className={styles.Background2}>
          <h1>3. Ethical Data Strategy</h1>
          <p>
            Ethics are the cornerstone of every data-driven endeavor. I provide
            guidance in developing robust ethical data strategies that
            prioritize transparency, consent, and responsible use. Together,
            we'll build a framework that not only adheres to ethical standards
            but also sets an example for others in the industry.
          </p>
        </div>
      </section>
      <TextPictureLeft
        heading="4. Impactful Data Visualization"
        textBlock="Numbers come to life through visualization. I create engaging and
          informative visualizations that narrate your data stories. From
          interactive Tableau dashboards to custom JavaScript visualizations, I
          transform raw data into insights that resonate, fostering a deeper
          understanding and driving informed decision-making."
        picUrl={features}
      />
      <section className={styles.background3}>
        <div className={styles.lBackground3}>
          <div className={styles.rBackground3}>
            <h1>5. Ongoing Collaboration and Support</h1>
            <p>
              Data's impact is an ongoing journey. I'm here to provide continued
              support, helping you adapt and evolve as your data needs grow.
              Whether it's refining strategies, adding new layers of insight, or
              scaling your data initiatives, I'm your dedicated partner in the
              quest for positive change.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionCollab}>
        <h1>Let's Collaborate for Change</h1>
        <p>
          Together, we have the power to shape a future where data illuminates
          possibilities and drives transformative action. If you're ready to
          harness the potential of data for impactful change, let's connect.
          Explore my portfolio, understand my journey, and envision the
          possibilities we can create together.
        </p>
        <p>
          Begin your exploration now, and let's unlock the potential of data for
          a brighter, more empowered future.
        </p>
      </section>
    </>
  );
};

export default Services;
