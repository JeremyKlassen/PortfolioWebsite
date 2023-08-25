import { HashLink as Link } from "react-router-hash-link";
import styles from "./FootLink.module.css";
import { Context } from "../../App";
import { useContext } from "react";

interface Props {
  name: string;
}

const FootLink = ({ name }: Props) => {
  const { setPage } = useContext(Context);
  const handleClick = () => {
    setPage(name);
  };

  return (
    <Link
      className={styles.footLink}
      smooth
      to={"/" + name + "#top"}
      onClick={handleClick}
    >
      {name}
    </Link>
  );
};

export default FootLink;
