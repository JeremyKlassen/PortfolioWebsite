import ImageGrid from "./ImageGrid";
import styles from "./About.module.css";
import pic7 from "../../assets/pics/jeremy7.jpg";
import pic2 from "../../assets/pics/jeremy2.jpeg";
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
        <p>
          Throughout my career as a youth worker, I've witnessed the
          transformative power of mentorship and guidance. Working with diverse
          communities, I've learned to adapt my approach, fostering a safe space
          for young minds to flourish. My passion for making a difference drives
          me every day.
        </p>
      </section>
      <section className={styles.about3}>
        <p>
          Beyond my work with youth, I'm an aspiring programmer currently
          pursuing a degree in Applied Computer Science at The University of
          Winnipeg. I'm eager to channel my technical skills into meaningful
          projects that benefit youth and their families.
        </p>
        <img
          className={styles.pic2}
          src={pic2}
          alt="Jeremy with his partner."
        />
      </section>
      <section className={styles.Background2}>
        <p>
          What sets me apart is my interest in using data to support and enhance
          youth work initiatives. I'm fascinated by data-driven insights and
          their potential to create positive impacts. My studies in sociology
          complement this passion, equipping me with valuable data gathering and
          research skills.
        </p>
      </section>
      <section className={styles.about5}>
        <div className={styles.aboutLakeContainer}>
          <img
            className={styles.aboutLake}
            src={lake}
            alt="Drone shot of the Whiteshell"
          />
        </div>
        <p>
          When I'm not programming or engaged in youth work, you'll likely find
          me exploring the world through my drone's lens or enjoying some gaming
          as a creative escape.
        </p>
      </section>
      <section className={styles.Background3}>
        <p>
          Thank you for joining me on this journey of innovation and impact.
          Together, let's build a brighter future!
        </p>
      </section>
      <div className={styles.pics}>
        <ImageGrid />
      </div>
    </>
  );
};

export default About;
