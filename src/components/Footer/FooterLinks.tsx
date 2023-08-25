import styles from "./FooterLinks.module.css";
import FootLink from "./FootLink";

const FooterLinks = () => {
  return (
    <nav className={styles.navTag}>
      <ul className={styles.navList}>
        <li>
          <FootLink name="Home" />
        </li>
        <li>
          <FootLink name="Services" />
        </li>
        <li>
          <FootLink name="About" />
        </li>
        <li>
          <FootLink name="Portfolio" />
        </li>
      </ul>
    </nav>
  );
};

export default FooterLinks;
