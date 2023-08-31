import tabLogo from "../../../assets/TableauLogo.png";

interface Props {
  size: number;
}

const Tableau = ({ size }: Props) => {
  const imageWidth = `${size * 5}rem`;
  const imageHeight = `${size * 1}rem`;

  const imageContainer = {
    width: imageWidth,
    height: imageHeight,
  };

  return (
    <>
      <a
        href="https://public.tableau.com/app/profile/jeremy.klassen/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn Profile"
        style={imageContainer}
      >
        <img src={tabLogo} alt="Tableau Logo" style={imageContainer} />
      </a>
    </>
  );
};

export default Tableau;
