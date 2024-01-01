import { Link } from "react-router-dom";
import styles from "./PWA.module.css";
import { useState } from "react";
import WhatIsPWA from "../Embeds/WhatIsPWA";

const PWA = () => {
  const [isExplained, setIsExplained] = useState(false);
  const handleClick = () => {
    setIsExplained(!isExplained);
  };
  return (
    <section id="PWAPortfolio" className={styles.PWAContainer}>
      <h2>Quick Drive Scheduler</h2>
      <p>
        I wrote a PWA to address an issue that a former employer had with with
        creating drive schedules. Every day Employees would need to be paired up
        with Clients that need to be driven to locations in the city. Multiple
        of these schedules are needed daily.
      </p>

      <p>
        Data needed to be safe, the application needed to be multi platform, and
        it needed to minimize mileage being used in each schedule created. A PWA
        is an ideal option for this since it can store data locally on the
        device, and be installed on any hardware the client wants. Additional, I
        developed a greedy algorithm to increase mileage efficiency.
      </p>

      <p>
        <a href="https://app.jeremyklassen.ca" target="_blank">
          Here is a link
        </a>{" "}
        to the MVP I wrote in my spare time. The source code is on Github,
        linked in the section below.
      </p>

      <Link className={styles.PWAAnalysis} onClick={handleClick} to={""}>
        {isExplained ? "Hide Explanation" : "What Exactly Is A PWA?"}
      </Link>
      {isExplained ? <WhatIsPWA /> : <></>}
    </section>
  );
};

export default PWA;
