import styles from "./Home.module.css";
import TextPictureLeft from "../TextPictureLeft/TextPictureLeft";
import TextPictureRight from "../TextPictureRight/TextPictureRight";
import bridge from "../../assets/bridge.jpg";
import jeremy5 from "../../assets/selfies/jeremy5.jpeg";
import DataIcons from "./DataIcons";

const Home = () => {
  return (
    <>
      <section className={styles.landing}>
        <h1>Data Solutions for Community Based Organizations</h1>
        <p>
          In the realm of data, mine is an important mission – to empower and
          uplift disadvantaged communities. I'm Jeremy, a Youth Worker,
          Programmer, and Data Enthusiast. This website is where my passion for
          positive change takes center stage.
        </p>
        <div className={styles.dataIconsContainer}>
          <DataIcons />
        </div>
      </section>
      <section className={styles.guided}>
        <div className={styles.background1}>
          <h1>Guided by Ethics-Based Data Exploration</h1>
          <p>
            Amidst the vast expanse of data, my compass is pointed towards the
            benefit of those who are disadvantaged, to uncover stories of
            transformation and translate them into opportunities. Each dataset
            holds a potential chapter of change, and I am committed to scripting
            those narratives.
          </p>
        </div>
      </section>
      <TextPictureRight
        heading="Coding a Bridge to Possibility"
        textBlock="My journey through Applied Computer Science at The University of
          Winnipeg has led me to a crossroads of innovation and empathy. The
          code I write isn't just a sequence of instructions; it's a bridge to a
          stronger future. It's a testament of my dedication to solutions that
          create a lasting impact."
        picUrl={bridge}
      />
      <section className={styles.empower}>
        <div className={styles.background2}>
          <h1>Empowering Youth with Insights</h1>
          <p>
            With 17 years as a Youth Worker, I've witnessed firsthand the
            incredible potential within every young individual. Now, armed with
            data-driven insights, I'm on a mission to magnify these potentials.
            The patterns within data are threads of change, and I'm here to
            weave a tapestry of growth and opportunities for disadvantaged
            youth.
          </p>
        </div>
      </section>
      <TextPictureLeft
        heading="Together, Let's Make a Difference"
        textBlock="Thank you for joining me on this profound journey. Whether you share
          my passion for data's transformative power or simply wish to explore,
          I invite you to connect. Together, we can amplify the voices of
          disadvantaged youth, turning raw data into a chorus of positive
          change. Begin your exploration of my projects, delve into my story,
          and let's pave a brighter future together."
        picUrl={jeremy5}
      />
      <section className={styles.collaborate}>
        <div className={styles.background3}>
          <h1>Connect and Collaborate</h1>
          <p>
            I invite you to reach out, whether you're a fellow enthusiast, a
            potential collaborator, or an employer seeking a unique blend of
            skills. Let's connect the dots and create new possibilities
            together. Your insights and ideas are invaluable as we strive to
            amplify the voices of disadvantaged youth.
          </p>
        </div>
      </section>
      <section className={styles.forgeAhead}>
        <h1>Forge Ahead, Illuminate Tomorrow</h1>
        <p>
          As you navigate this site, remember that it's not just about pages and
          pixels – it's about the impact we can create together. Explore,
          engage, and envision a future where data becomes a force for good.
        </p>
      </section>
    </>
  );
};

export default Home;
