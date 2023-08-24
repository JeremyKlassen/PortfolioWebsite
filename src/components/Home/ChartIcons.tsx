import styles from "./ChartIcons.module.css";
import { AiOutlineRadarChart } from "react-icons/ai";
import { PiChartBarFill } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa";
import { MdBubbleChart } from "react-icons/md";

const ChartIcons = () => {
  const chartSize = 70;
  return (
    <>
      <div className={styles.chartGrid}>
        <PiChartBarFill size={chartSize} />
        <AiOutlineRadarChart size={chartSize} />
        <FaChartLine size={chartSize} />
        <MdBubbleChart size={chartSize} />
      </div>
    </>
  );
};

export default ChartIcons;
