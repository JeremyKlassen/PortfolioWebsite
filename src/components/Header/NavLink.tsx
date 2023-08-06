import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface Props {
  name: string;
}

const NavLink = ({ name }: Props) => {
  return (
    <li className={styles.linkContainer}>
      <Link className={styles.link} to={"/" + name}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
