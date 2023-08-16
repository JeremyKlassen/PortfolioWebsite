import reactLogo from "../../assets/React.svg";
import styles from "./ReactLogo.module.css";

interface Props {
  size: number;
}

const ReactLogo = ({ size }: Props) => {
  const imageSize = `${size}rem`;

  const imageContainer = {
    width: imageSize,
    height: imageSize,
  };
  return (
    <>
      <a
        href="https://github.com/JeremyKlassen/PortfolioWebsite"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn Profile"
        style={imageContainer}
        className={styles.reactLogoLink}
      >
        <img
          className="reactLogo"
          src={reactLogo}
          alt="React Logo"
          style={imageContainer}
        />
      </a>
    </>
  );
};

export default ReactLogo;
