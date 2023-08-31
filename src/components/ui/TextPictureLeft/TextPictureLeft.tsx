import styles from "./TextPictureLeft.module.css";

interface Props {
  picUrl: string;
  textBlock: React.ReactNode;
  heading: string;
}

const TextPictureLeft = ({ heading, textBlock, picUrl }: Props) => {
  return (
    <>
      <section className={styles.sectionContent}>
        <img className={styles.pic} src={picUrl} alt={heading} />
        <h2 className={styles.sectionHeader}>{heading}</h2>
        <p className={styles.sectionP}>{textBlock}</p>
      </section>
    </>
  );
};

export default TextPictureLeft;
