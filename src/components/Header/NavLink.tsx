import styles from "./NavLinks.module.css";

interface Props {
  name: string;
  onClick: (page: string) => void;
}

const NavLink = ({ name, onClick }: Props) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div className={styles.link}>
      <a onClick={handleClick}>{name}</a>
    </div>
  );
};

export default NavLink;
