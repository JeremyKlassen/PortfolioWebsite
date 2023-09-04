import styles from "./DataIcons.module.css";
import {
  PiMicrosoftExcelLogoBold,
  PiMicrosoftWordLogoBold,
  PiMicrosoftOutlookLogoBold,
} from "react-icons/pi";
import { SiMicrosoftaccess } from "react-icons/si";

const DataIcons = () => {
  const iconSize = 70;
  return (
    <>
      <div className={styles.iconGrid}>
        <PiMicrosoftExcelLogoBold size={iconSize} />
        <PiMicrosoftWordLogoBold size={iconSize} />
        <SiMicrosoftaccess size={iconSize} />
        <PiMicrosoftOutlookLogoBold size={iconSize} />
      </div>
    </>
  );
};

export default DataIcons;
