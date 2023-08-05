import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <div className={styles.footContent}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
