import styles from "./Header.module.css";
import headBanner from "../../assets/header.jpg";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

interface Props {
  updatePage: (page: string) => void;
}

const Header = ({ updatePage }: Props) => {
  return (
    <>
      <section className={styles.headContainer}>
        <div className={styles.logo}>
          <Logo onClick={updatePage} name="home" />
        </div>

        <NavLinks updatePage={updatePage} />
      </section>
      <img className={styles.banner} src={headBanner} alt="Head Banner" />
    </>
  );
};

export default Header;
