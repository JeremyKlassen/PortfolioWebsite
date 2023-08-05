import NavLink from "./NavLink";
import styles from "./NavLinks.module.css";

interface Props {
  updatePage: (page: string) => void;
}

const NavLinks = ({ updatePage }: Props) => {
  return (
    <nav className={styles.navLinks}>
      <ul className={styles.navList}>
        <li>
          <NavLink onClick={updatePage} name="Services" />
        </li>
        <li>
          <NavLink onClick={updatePage} name="About Me" />
        </li>
        <li>
          <NavLink onClick={updatePage} name="Portfolio" />
        </li>
        <li>
          <NavLink onClick={updatePage} name="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
