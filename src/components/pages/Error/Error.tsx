import styles from "./Error.module.css";
import bird from "../../../assets/bird.jpg";

const Error = () => {
  return (
    <section className={styles.errorContainer}>
      <h1>Well this is awkward...</h1>
      <h2>This isn't actually a page.</h2>
      <p>
        I mean, ok it is a page. It isn't one that has any important content
        though, except for this cute bird photo I took.
      </p>
      <img src={bird} alt="A Cute Bird" className={styles.birdPic} />
    </section>
  );
};

export default Error;
