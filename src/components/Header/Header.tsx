import styles from "./Header.module.css";
import headBanner from "../../assets/header.jpg";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className={styles.headBannerContainer}>
        <section className={styles.headContainer}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <NavLinks />
        </section>
        <div className={styles.banner}>
          <div className={styles.centeredText}>
            <h1>Jeremy Klassen</h1>
            <h2>Portfolio Website</h2>
          </div>
          <img className={styles.banner} src={headBanner} alt="Head Banner" />
        </div>
      </div>
    </>
  );
};

export default Header;
