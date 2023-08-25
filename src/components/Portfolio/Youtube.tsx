import styles from "./Portfolio.module.css";

const Youtube = () => {
  return (
    <div className={styles.youtubeVideo}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/C2pgh6bj2Nc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
