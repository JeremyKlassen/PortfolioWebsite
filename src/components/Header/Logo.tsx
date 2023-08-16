import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";

interface Props {
  isMobile: boolean;
}

const Logo = ({ isMobile }: Props) => {
  const iconSize = isMobile ? 50 : 100;
  return (
    <Link to="/Home">
      <GiBeard size={iconSize} color="#85680a" />
    </Link>
  );
};

export default Logo;
