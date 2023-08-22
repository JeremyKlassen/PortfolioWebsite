import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

interface Props {
  isMobile: boolean;
}

const Logo = ({ isMobile }: Props) => {
  const iconSize = isMobile ? 50 : 70;
  return (
    <Link to="/Home" className={styles.logoContainer}>
      <GiBeard size={iconSize} color="#85680a" />
      <p>Home</p>
    </Link>
  );
};

export default Logo;
