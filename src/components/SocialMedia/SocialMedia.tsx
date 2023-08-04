import Github from "./Github";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Tableau from "./Tableau";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaItem}>
          <LinkedIn size={1} />
        </div>
        <div className={styles.socialMediaItem}>
          <Tableau size={1} />
        </div>
        <div className={styles.socialMediaItem}>
          <Instagram size={1} />
        </div>
        <div className={styles.socialMediaItem}>
          <Github size={1} />
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
