import { GiBeard } from "react-icons/gi";

interface Props {
  name: string;
  onClick: (page: string) => void;
}

const Logo = ({ onClick, name }: Props) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <a onClick={handleClick}>
      <GiBeard size={35} color="#E3C050" />
    </a>
  );
};

export default Logo;
