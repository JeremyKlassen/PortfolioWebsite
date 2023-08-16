import styles from "./TextPictureLeft.module.css";

interface Props {
  picUrl: string;
  textBlock: React.ReactNode;
  heading: string;
}

const TextPictureLeft = ({ heading, textBlock, picUrl }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <img className={styles.pic} src={picUrl} alt={heading} />
        <div>
          <h1>{heading}</h1>
          <p>{textBlock}</p>
        </div>
      </section>
    </>
  );
};

export default TextPictureLeft;
