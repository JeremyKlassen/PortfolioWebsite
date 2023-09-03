// import styles from "./Header.module.css";
// import { useEffect, useState } from "react";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";
// import Banner from "./Banner";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import { BiSolidRightArrow } from "react-icons/bi";

// const Header = () => {
//   // components to be used in ternary operators
//   const burger = () => {
//     return (
//       <Link className={styles.hamburgerDiv} onClick={handleClick} to={""}>
//         <GiHamburgerMenu color="#023047" size={50} />
//       </Link>
//     );
//   };

//   const arrow = () => {
//     return (
//       <Link className={styles.arrowDiv} onClick={handleClick} to={""}>
//         <BiSolidRightArrow color="#023047" size={40} />
//       </Link>
//     );
//   };

//   const logo = () => {
//     return (
//       <div className={styles.logo}>
//         <Logo isMobile={showBanner} />
//       </div>
//     );
//   };

//   //state
//   const [showBanner, setShowBanner] = useState(window.innerWidth > 768);
//   const [menuShown, setMenuShown] = useState(window.innerWidth > 768);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

//   const handleClick = () => {
//     setMenuShown(!menuShown);
//   };

//   //changes the banner depending on screenwidth
//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 768);
//       setShowBanner(isDesktop);
//     };

//     const initialSize = () => {
//       setIsDesktop(window.innerWidth > 768);
//       setShowBanner(isDesktop);
//       setMenuShown(isDesktop);
//     };

//     initialSize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [showBanner]);

//   return (
//     <>
//       <section
//         className={`${styles.headContainer}  ${
//           menuShown ? styles.headContainerExp : styles.headContainerMin
//         }`}
//       >
//         {menuShown ? (
//           <>
//             {logo()}
//             <NavLinks setMenuShown={setMenuShown} />
//             {isDesktop ? <></> : arrow()}
//           </>
//         ) : (
//           <>
//             {logo()}
//             {burger()}
//           </>
//         )}
//       </section>
//       {showBanner && <Banner />}
//       {!showBanner ? (
//         <section className={styles.nameSection}>
//           <div className={styles.nameContainer}>
//             <h1 className={styles.mobileH1}>Jeremy Klassen</h1>
//             <h2 className={styles.mobileH2}>
//               Web Development & Information Systems
//             </h2>
//           </div>
//         </section>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// export default Header;

import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Banner from "./Banner";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const Header = () => {
  // components to be used in ternary operators
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
        <Logo isMobile={!isDesktop} />
      </div>
    );
  };

  //state
  const [menuShown, setMenuShown] = useState(window.innerWidth > 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const handleClick = () => {
    setMenuShown(!menuShown);
  };

  //changes the banner depending on screenwidth
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth > 768;
      setIsDesktop(newIsDesktop);
    };

    const initialSize = () => {
      const newIsDesktop = window.innerWidth > 768;
      setIsDesktop(newIsDesktop);
    };

    initialSize();

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
          <>
            {logo()}
            <NavLinks setMenuShown={setMenuShown} />
            {isDesktop ? <></> : arrow()}
          </>
        ) : (
          <>
            {logo()}
            {burger()}
          </>
        )}
      </section>
      {isDesktop && <Banner />}
      {!isDesktop ? (
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
