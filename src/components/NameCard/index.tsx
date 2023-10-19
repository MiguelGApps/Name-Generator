import Button from "../Button";
import GenderPicker from "../GenderPicker";
import NameInfo from "../NameInfo";
import { useNameGeneratorLogic } from "../../hooks/useNameGeneratorLogic";
import styles from "./styles.module.css";

const NameCard = () => {
  const { getNewName } = useNameGeneratorLogic();

  return (
    <div className={styles.nameCardDiv}>
      <GenderPicker />
      <NameInfo />
      <Button label="Generate a new name" onClick={getNewName} />
    </div>
  );
};

export default NameCard;
