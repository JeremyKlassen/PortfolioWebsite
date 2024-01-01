import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { Context } from "../../../App";
import { useContext } from "react";

const Logo = () => {
  const { setPage } = useContext(Context);
  const iconSize = 50;
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
