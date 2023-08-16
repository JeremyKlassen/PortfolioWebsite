import styles from "./Header.module.css";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import Banner from "./Banner";
import { useEffect, useState } from "react";

const Header = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowBanner(window.innerWidth > 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={styles.headBannerContainer}>
        <section className={styles.headContainer}>
          <div className={styles.logo}>
            <Logo isMobile={showBanner} />
          </div>
          <NavLinks />
        </section>
        {showBanner && <Banner />}
      </div>
    </>
  );
};

export default Header;
