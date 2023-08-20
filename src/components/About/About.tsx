import ImageGrid from "./ImageGrid";
import styles from "./About.module.css";
import pic7 from "../../assets/selfies/jeremy7.jpg";
import pic2 from "../../assets/selfies/jeremy2.jpeg";
import lake from "../../assets/lake.jpg";

const About = () => {
  return (
    <>
      <section className={styles.about1}>
        <img
          className={styles.pic7}
          src={pic7}
          alt="Jeremy in front of a lake."
        />
        <div className="welcomeContent">
          <h1>
            Hello, I'm Jeremy, a Youth Worker, Programmer, and Data Enthusiast!
          </h1>
          <p>
            Welcome to my corner of the digital world! With 17 years of youth
            work experience and a passion for data-driven solutions, I'm
            thrilled to share my journey with you.
          </p>
        </div>
      </section>
      <section className={styles.Background1}>
        <h2>Two decades of Youthwork</h2>
        <p>
          Throughout my career as a youth worker, I've witnessed the
          transformative power of mentorship and guidance. Working with diverse
          communities, I've learned to adapt my approach, fostering a safe space
          for young minds to flourish. My passion for making a difference drives
          me every day.
        </p>
      </section>
      <section className={styles.about3}>
        <h2 className={styles.about3h2}>
          Applied Computer Science at University of Winnipeg
        </h2>
        <p className={styles.about3p}>
          Beyond my work with youth, I'm an aspiring programmer currently
          pursuing a degree in Applied Computer Science at The University of
          Winnipeg. I'm eager to channel my technical skills into meaningful
          projects that benefit youth and their families.
        </p>
        <img
          className={styles.pic2 + " " + styles.about3img}
          src={pic2}
          alt="Jeremy with his partner."
        />
      </section>
      <section className={styles.Background2}>
        <h2>What Makes Me Unique</h2>
        <p>
          What sets me apart is my interest in using data to support and enhance
          youth work initiatives. I'm fascinated by data-driven insights and
          their potential to create positive impacts. My studies in sociology
          complement this passion, equipping me with valuable data gathering and
          research skills.
        </p>
      </section>
      <section>
        <h2>Drone Photography</h2>
        <div className={styles.about5}>
          <div className={styles.aboutLakeContainer}>
            <img
              className={styles.aboutLake}
              src={lake}
              alt="Drone shot of the Whiteshell"
            />
          </div>
          <p>
            When I'm not programming or engaged in youth work, you'll likely
            find me exploring the world through my drone's lens or enjoying some
            gaming as a creative escape.
          </p>
        </div>
      </section>
      <section className={styles.Background3}>
        <h2>
          Thank you for joining me on this journey of innovation and impact.
          Together, let's build a brighter future!
        </h2>
      </section>
      <div className={styles.pics}>
        <ImageGrid />
      </div>
    </>
  );
};

export default About;
