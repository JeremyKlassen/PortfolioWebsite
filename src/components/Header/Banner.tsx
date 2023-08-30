import styles from "./Banner.module.css";
import headBanner from "../../assets/plantHeader.jpg";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.centeredText}>
        <h1>Jeremy Klassen</h1>
        <h2>Web Development & Information Systems</h2>
      </div>
      <img className={styles.banner} src={headBanner} alt="Head Banner" />
    </div>
  );
};

export default Banner;
