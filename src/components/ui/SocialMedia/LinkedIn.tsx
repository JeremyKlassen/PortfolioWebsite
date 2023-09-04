import linkedInLogo from "../../../assets/linkedIn.png";

interface Props {
  size: number;
}

const LinkedIn = ({ size }: Props) => {
  const imageWidth = `${size * 1.25}rem`;
  const imageHeight = `${size * 1}rem`;

  const imageContainer = {
    width: imageWidth,
    height: imageHeight,
  };

  return (
    <>
      <a
        href="https://www.linkedin.com/in/jeremy-klassen/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn Profile"
        style={imageContainer}
      >
        <img src={linkedInLogo} alt="LinkedIn Logo" style={imageContainer} />
      </a>
    </>
  );
};

export default LinkedIn;
