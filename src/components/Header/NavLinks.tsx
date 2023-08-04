import NavLink from "./NavLink";
import styles from "./NavLinks.module.css";

interface Props {
  updatePage: (page: string) => void;
}

const NavLinks = ({ updatePage }: Props) => {
  return (
    <div className={styles.navLinks}>
      <NavLink onClick={updatePage} name="Services" />
      <NavLink onClick={updatePage} name="About Me" />
      <NavLink onClick={updatePage} name="Portfolio" />
      <NavLink onClick={updatePage} name="Contact" />
    </div>
  );
};

export default NavLinks;
