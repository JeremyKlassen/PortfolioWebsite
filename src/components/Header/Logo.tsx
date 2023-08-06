import { GiBeard } from "react-icons/gi";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/Home">
      <GiBeard size={35} color="#85680a" />
    </Link>
  );
};

export default Logo;
