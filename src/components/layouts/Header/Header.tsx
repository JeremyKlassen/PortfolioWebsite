import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Banner from "./Banner";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const Header = () => {
  const burger = () => {
    return (
      <Link className={styles.hamburgerDiv} onClick={handleClick} to={""}>
        <GiHamburgerMenu color="#023047" size={50} />
      </Link>
    );
  };

  const arrow = () => {
    return (
      <Link className={styles.arrowDiv} onClick={handleClick} to={""}>
        <BiSolidRightArrow color="#023047" size={40} />
      </Link>
    );
  };

  const logo = () => {
    return (
      <div className={styles.logo}>
        <Logo isMobile={showBanner} />
      </div>
    );
  };
  const [showBanner, setShowBanner] = useState(false);
  const [menuShown, setMenuShown] = useState(false);

  const handleClick = () => {
    setMenuShown(!menuShown);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowBanner(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section
        className={`${styles.headContainer}  ${
          menuShown ? styles.headContainerExp : styles.headContainerMin
        }`}
      >
        {menuShown ? (
          <div className={styles.headExpDiv}>
            <div className={styles.arrowExpDiv}>{arrow()}</div>
            <ul>
              <li>{logo()}</li>
              <li>
                <NavLinks setMenuShown={setMenuShown} />
              </li>
            </ul>
          </div>
        ) : (
          <>
            {logo()}
            {burger()}
          </>
        )}
      </section>
      {showBanner && <Banner />}
      {!showBanner ? (
        <section className={styles.nameSection}>
          <div className={styles.nameContainer}>
            <h1 className={styles.mobileH1}>Jeremy Klassen</h1>
            <h2 className={styles.mobileH2}>
              Web Development & Information Systems
            </h2>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
