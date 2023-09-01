import FootLink from "./FootLink";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
  return (
    <nav className={styles.navTag}>
      <ul className={styles.footNavList}>
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
