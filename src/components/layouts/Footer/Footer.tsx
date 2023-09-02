import SocialMedia from "../../ui/SocialMedia/SocialMedia";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <div className={styles.footerLinksDiv}>
        <FooterLinks />
      </div>
      <div className={styles.footContent}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Footer;
