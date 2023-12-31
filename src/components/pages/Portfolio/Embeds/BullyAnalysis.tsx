import bully from "../../../../assets/BullyingPrediction.pdf";
import styles from "./BullyAnalysis.module.css";
import DownloadButton from "../../../ui/DownloadButton/DownloadButton";

const BullyAnalysis = () => {
  return (
    <div>
      <div className={styles.pdfWrapper}>
        <iframe title="Bully Analysis PDF" src={bully}></iframe>
      </div>
      <div className={styles.bufferDiv}>
        <DownloadButton downloadUrl={bully} downloadName="BullyAnalysis.pdf" />
      </div>
    </div>
  );
};

export default BullyAnalysis;
