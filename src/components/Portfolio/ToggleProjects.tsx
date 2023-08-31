import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./ToggleProjects.module.css";

interface Props {
  label: string;
  accordianBools: boolean[];
  setBools: (updatedBools: boolean[]) => void;
  slot: number;
}

const ToggleProjects = ({ label, accordianBools, setBools, slot }: Props) => {
  const size = 50;
  const handleClick = () => {
    const updatedBools: boolean[] = [...accordianBools];
    updatedBools[slot] = !updatedBools[slot];
    setBools(updatedBools);
  };
  return (
    <>
      {accordianBools[slot] ? (
        <Link className={styles.toggleText} onClick={handleClick} to={""}>
          <AiOutlineMinusCircle color="orange" size={size} />
          <p>{label}</p>
        </Link>
      ) : (
        <Link className={styles.toggleText} onClick={handleClick} to={""}>
          <AiOutlinePlusCircle color="green" size={size} />
          <p>{label}</p>
        </Link>
      )}
    </>
  );
};

export default ToggleProjects;
