import styles from "./TextPictureRight.module.css";

interface Props {
  picUrl: string;
  textBlock: string;
  heading: string;
}

const TextPictureLeft = ({ heading, textBlock, picUrl }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <div>
          <h1>{heading}</h1>
          <p>{textBlock}</p>
        </div>
        <img className={styles.pic} src={picUrl} alt={heading} />
      </section>
    </>
  );
};

export default TextPictureLeft;
