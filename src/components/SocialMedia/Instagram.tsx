import instaLogo from "../../assets/Instagram.svg";

interface Props {
  size: number;
}

const Instagram = ({ size }: Props) => {
  const imageSize = `${size}rem`;

  const imageContainer = {
    width: imageSize,
    height: imageSize,
  };

  return (
    <a
      href="https://github.com/JeremyKlassen"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my GitHub Profile"
      style={imageContainer}
    >
      <img
        className="githubLogo"
        src={instaLogo}
        alt="Github Logo"
        style={imageContainer}
      />
    </a>
  );
};

export default Instagram;
