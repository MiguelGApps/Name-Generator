import NameCard from "../../components/NameCard";
import styles from "./styles.module.css";

const NameGenerator = () => {
  return (
    <div className={styles.nameGeneratorDiv}>
      <NameCard />
    </div>
  );
};

export default NameGenerator;
