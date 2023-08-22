import Github from "./Github";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Tableau from "./Tableau";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  const lSize = 2;
  return (
    <>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaItem}>
          <Instagram size={lSize} />
        </div>
        <div className={styles.socialMediaItem}>
          <Github size={lSize} />
        </div>
        <div className={styles.socialMediaItem}>
          <Tableau size={lSize} />
        </div>
        <div className={styles.socialMediaItem}>
          <LinkedIn size={lSize} />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
