import { HashLink as Link } from "react-router-hash-link";
import styles from "./FootLink.module.css";

interface Props {
  name: string;
}

const FootLink = ({ name }: Props) => {
  return (
    <Link className={styles.footLink} smooth to={"/" + name + "#top"}>
      {name}
    </Link>
  );
};

export default FootLink;
