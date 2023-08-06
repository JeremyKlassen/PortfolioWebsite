import NavLink from "./NavLink";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <nav className={styles.navLinks}>
      <ul className={styles.navList}>
        <li>
          <NavLink name="Services" />
        </li>
        <li>
          <NavLink name="About" />
        </li>
        <li>
          <NavLink name="Portfolio" />
        </li>
        <li>
          <NavLink name="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
