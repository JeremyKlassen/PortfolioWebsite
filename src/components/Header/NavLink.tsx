import { Link } from "react-router-dom";
import styles from "./NavLinks.module.css";

interface Props {
  name: string;
}

const NavLink = ({ name }: Props) => {
  if (name === "Contact")
    return (
      <Link
        className={styles.link + " " + styles.connectButton}
        to={"/" + name}
      >
        Connect
      </Link>
    );
  else
    return (
      <Link className={styles.link} to={"/" + name}>
        {name}
      </Link>
    );
};

export default NavLink;
