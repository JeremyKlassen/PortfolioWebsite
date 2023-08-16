import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <FooterLinks />
      <div className={styles.footContent}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
