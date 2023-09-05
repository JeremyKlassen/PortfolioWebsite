import styles from "./DownloadButton.module.css";

interface Props {
  downloadUrl: string;
  downloadName: string;
}

const DownloadButton = ({ downloadUrl, downloadName }: Props) => {
  return (
    <>
      <a
        className={styles.buttonWrapper}
        href={downloadUrl}
        download={downloadName}
      >
        Download PDF
      </a>
    </>
  );
};

export default DownloadButton;
