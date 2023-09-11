import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.centeredText}>
        <h1>Jeremy Klassen</h1>
        <h2>Web Development & Information Systems</h2>
      </div>
    </div>
  );
};

export default Banner;
