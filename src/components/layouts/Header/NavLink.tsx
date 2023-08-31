import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./NavLinks.module.css";
import { Context } from "../../../App";
import { useContext } from "react";

interface Props {
  name: string;
}

const NavLink = ({ name }: Props) => {
  const { page, setPage } = useContext(Context);

  const handleClick = () => {
    setPage(name);
  };

  let linkElement;

  if (name === "Contact")
    linkElement = (
      <HashLink
        className={styles.link + " " + styles.connectButton}
        smooth
        to={"/" + page + "#contact"}
      >
        Connect
      </HashLink>
    );
  else
    linkElement = (
      <Link className={styles.link} to={"/" + name} onClick={handleClick}>
        {name}
      </Link>
    );
  return linkElement;
};

export default NavLink;
