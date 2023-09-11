import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { Context } from "../../../App";
import { useContext } from "react";

interface Props {
  isMobile: boolean;
}

const Logo = ({ isMobile }: Props) => {
  const { setPage } = useContext(Context);
  const iconSize = isMobile ? 50 : 40;
  const handleClick = () => {
    setPage("Home");
  };

  return (
    <Link to="/Home" className={styles.logoContainer} onClick={handleClick}>
      <GiBeard size={iconSize} color="#8f5c21" />
      <p className={styles.logoP}>Home</p>
    </Link>
  );
};

export default Logo;
