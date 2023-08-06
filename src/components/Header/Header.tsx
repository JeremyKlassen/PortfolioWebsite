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
        <img className={styles.banner} src={headBanner} alt="Head Banner" />
      </div>
    </>
  );
};

export default Header;
