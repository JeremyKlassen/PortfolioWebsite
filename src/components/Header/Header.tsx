import styles from "./Header.module.css";
import headBanner from "../../assets/header.jpg";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

interface Props {
  updatePage: (page: string) => void;
}

const Header = ({ updatePage }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.selectable}>
        <div className={styles.logo}>
          <Logo onClick={updatePage} name="home" />
        </div>
        <NavLinks updatePage={updatePage} />
      </div>
      <img className={styles.banner} src={headBanner} alt="Head Banner" />
    </div>
  );
};

export default Header;
