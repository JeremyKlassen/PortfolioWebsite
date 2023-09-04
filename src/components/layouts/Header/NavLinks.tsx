import NavLink from "./NavLink";
import styles from "./NavLinks.module.css";

interface Props {
  setMenuShown: (bool: boolean) => void;
}

const NavLinks = ({ setMenuShown }: Props) => {
  return (
    <nav className={styles.navLinks}>
      <ul className={styles.navList}>
        <li>
          <NavLink setMenuShown={setMenuShown} name="Services" />
        </li>
        <li>
          <NavLink setMenuShown={setMenuShown} name="About" />
        </li>
        <li>
          <NavLink setMenuShown={setMenuShown} name="Portfolio" />
        </li>
        <li>
          <NavLink setMenuShown={setMenuShown} name="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
