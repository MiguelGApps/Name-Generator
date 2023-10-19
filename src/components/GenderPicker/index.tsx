import Button from "../Button";
import { Gender } from "../../types/Gender";
import { useNameGeneratorLogic } from "../../hooks/useNameGeneratorLogic";
import styles from "./styles.module.css";

const GenderPicker = () => {
  const { gender, changeGender } = useNameGeneratorLogic();

  return (
    <div className={styles.genderPickerDiv}>
      <Button
        onClick={() => {
          changeGender(Gender.Male);
        }}
        label={"Male"}
        selected={gender === Gender.Male}
      />
      <Button
        onClick={() => {
          changeGender(Gender.Female);
        }}
        label={"Female"}
        selected={gender === Gender.Female}
      />
    </div>
  );
};

export default GenderPicker;
