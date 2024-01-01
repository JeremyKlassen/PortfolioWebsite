// export default Header;
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Banner from "./Banner";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const Header = () => {
  useEffect(() => {
    const winWidth = window.innerWidth;
    if (winWidth > 460) setIsMenuOpen(true);
    else setIsMenuOpen(false);
  }, []);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section
        className={`${styles.headContainer} ${
          isMenuOpen ? styles.headContainerExp : styles.headContainerMin
        }`}
      >
        {isMenuOpen ? (
          <>
            <Logo />
            <Link className={styles.arrowDiv} onClick={handleClick} to={""}>
              <FaAnglesRight color="#ffffff" size={40} />
            </Link>
            <NavLinks setMenuShown={setIsMenuOpen} />
          </>
        ) : (
          <>
            <Logo />
            <Link className={styles.hamburgerDiv} onClick={handleClick} to={""}>
              <GiHamburgerMenu color="#ffffff" size={50} />
            </Link>
          </>
        )}
      </section>
      <Banner />
    </>
  );
};

export default Header;
