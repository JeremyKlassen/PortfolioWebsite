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
//         <Logo isMobile={!isDesktop} />
//       </div>
//     );
//   };

//   //state
//   const [menuShown, setMenuShown] = useState(window.innerWidth > 768);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

//   const handleClick = () => {
//     setMenuShown(!menuShown);
//   };

//   //changes the banner depending on screenwidth
//   useEffect(() => {
//     const handleResize = () => {
//       const newIsDesktop = window.innerWidth > 768;
//       setIsDesktop(newIsDesktop);
//     };

//     const initialSize = () => {
//       const newIsDesktop = window.innerWidth > 768;
//       setIsDesktop(newIsDesktop);
//     };

//     initialSize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

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
//       {isDesktop && <Banner />}
//       {!isDesktop ? (
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
  //   // components to be used in ternary operators
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
  // State to track screen width
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Function to handle clicks on the menu
  const handleClick = () => {
    if (!isDesktop) {
      // Close the menu only if it's not a desktop screen
      setIsMenuOpen(false);
    }
  };

  // Effect to update screen width
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

  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section
        className={`${styles.headContainer} ${
          isMenuOpen ? styles.headContainerExp : styles.headContainerMin
        }`}
      >
        {isMenuOpen || isDesktop ? (
          <>
            {logo()}
            <NavLinks setMenuShown={setIsMenuOpen} />
            {isDesktop ? <></> : arrow()}
          </>
        ) : (
          <>
            {logo()}
            {burger()}
          </>
        )}
      </section>
      {isDesktop ? (
        <Banner />
      ) : (
        <section className={styles.nameSection}>
          <div className={styles.nameContainer}>
            <h1 className={styles.mobileH1}>Jeremy Klassen</h1>
            <h2 className={styles.mobileH2}>
              Web Development & Information Systems
            </h2>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
