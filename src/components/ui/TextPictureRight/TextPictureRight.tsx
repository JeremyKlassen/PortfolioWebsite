import styles from "./TextPictureRight.module.css";

interface Props {
  picUrl: string;
  textBlock: string;
  heading: string;
}

const TextPictureLeft = ({ heading, textBlock, picUrl }: Props) => {
  return (
    <>
      <section className={styles.sectionContent}>
        <h2 className={styles.sectionHeader}>{heading}</h2>
        <p className={styles.sectionP}>{textBlock}</p>
        <div className={styles.picDiv}>
          <img className={styles.pic} src={picUrl} alt={heading} />
        </div>
      </section>
    </>
  );
};

export default TextPictureLeft;
