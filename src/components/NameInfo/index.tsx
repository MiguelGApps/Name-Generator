import { useNameGeneratorLogic } from "../../hooks/useNameGeneratorLogic";
import styles from "./styles.module.css";

const NameInfo = () => {
  const { nameInfo } = useNameGeneratorLogic();

  return (
    <div className={styles.nameInfoDiv}>
      <h4 className={styles.nameInfoName} data-testid="nameInfoName">
        {nameInfo.name}
      </h4>
      <p
        className={styles.nameInfoNumber}
        data-testid="nameInfoNumber"
      >{`This name have been used ${nameInfo.number} times`}</p>
    </div>
  );
};

export default NameInfo;
