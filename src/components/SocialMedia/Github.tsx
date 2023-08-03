import githubLogo from "../../assets/github-mark-white.svg";

interface Props {
  size: number;
}

const Github = ({ size }: Props) => {
  const imageSize = `${size}rem`;

  const imageContainer = {
    width: imageSize,
    height: imageSize,
  };
  return (
    <>
      <a
        href="https://github.com/JeremyKlassen"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub Profile"
        style={imageContainer}
      >
        <img
          className="githubLogo"
          src={githubLogo}
          alt="Github Logo"
          style={imageContainer}
        />
      </a>
    </>
  );
};

export default Github;
