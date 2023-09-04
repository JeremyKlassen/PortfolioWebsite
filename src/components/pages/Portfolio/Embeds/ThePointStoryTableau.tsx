const { tableau } = window as any;
import { useRef, useEffect } from "react";
import styles from "./ThreePointStoryTableau.module.css";

const ThreePointStoryTableau = () => {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/3PointStoryAssignment/Story1";
  const options = {
    device: "phone",
  };

  function initViz() {
    new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    try {
      initViz();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.tps}>
      <div className={styles.tpsDiv} ref={ref}></div>
    </div>
  );
};

export default ThreePointStoryTableau;
