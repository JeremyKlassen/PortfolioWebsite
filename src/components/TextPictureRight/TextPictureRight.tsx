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
        <h1 className={styles.sectionHeader}>{heading}</h1>
        <p className={styles.sectionP}>{textBlock}</p>
        <img className={styles.pic} src={picUrl} alt={heading} />
      </section>
    </>
  );
};

export default TextPictureLeft;
