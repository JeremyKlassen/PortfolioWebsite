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
        heading="Data Strategy Analysis"
        textBlock={
          <div>
            The first step for a project is often figuring out a Data Strategy.
            Important questions need to be answered:
            <ul className={styles.dsList}>
              <li className={styles.dsListItem}>
                What is the problem or question that needs to be worked on?
              </li>
              <li className={styles.dsListItem}>
                What Metrics (stuff we can measure) can be tracked?
              </li>
              <li className={styles.dsListItem}>
                Which of these are the best options to spend time and money
                tracking?
              </li>
              <li className={styles.dsListItem}>
                What are the Key Performance Indicators that should be used to
                gauge progress?
              </li>
            </ul>
            To put together a Data Strategy many methods can be employed, from
            connecting with Managers and Frontline Staff, to going over program
            schedules and documents.
          </div>
        }
        picUrl={jeremy8}
      />
      <section className={styles.section1}>
        <div className={styles.lBackground1}>
          <div className={styles.rBackground1}>
            <h1>Data Driven Storytelling</h1>
            <p>
              A positive recent trend in the data world has been on translating
              raw data into compelling narratives that drive change. In Social
              Services we deal with people, communities and organizations that
              have stories. Using data we can better communicate the components
              of their stories like plots, settings, characters, conflicts, and
              actions.
            </p>
          </div>
        </div>
      </section>
      <TextPictureRight
        heading="Full Stack Data Solutions"
        textBlock="When it comes to the software needed to meet your data needs, 
        a variety of tools can be leveraged that encompass the full data stack. 
        Whether it's data collection, processing, analysis, or visualization, my 
        expertise spans the spectrum. I typically harness the power of Python, 
        and JavaScript in order to craft customized systems to meet your unique 
        needs."
        picUrl={chi}
      />

      <section className={styles.section3}>
        <div className={styles.Background2}>
          <h1>Data Consolidation</h1>
          <p>
            Centralizing an organizations data is a good idea. Having more of it
            in one spot reduces security threats, reduces costs, allows for more
            accurate analysis, and data can be produced quickly when needed.
            Sadly there are usually practical hurdles. Social Service
            organizations can have a lot of indepently operating programs, with
            their own systems and methods to track data. Sometimes programs are
            brought into the organization with different systems. Efforts to
            centralize their data and processes can result in significant
            friction between people. A solution the data community has developed
            for this type of problem is called:
          </p>
          <h2>Data Pipelines!</h2>
          <p>
            The idea is to look at the independent program’s systems, and find a
            way to pipe the data in it into the central system of your
            organization. This strategy allows the program to operate how it’s
            used to with minimal change, and it allows the larger organization
            access to the data it needs to support it’s programs.
          </p>
        </div>
      </section>
      <TextPictureLeft
        heading="Impactful Data Visualization"
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
            <h1>Ongoing Collaboration and Support</h1>
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
