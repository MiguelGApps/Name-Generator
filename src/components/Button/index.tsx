import styles from "./styles.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
}

const Button = ({ label, onClick, selected = false }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${selected ? styles.selected : ""}`}
      onClick={onClick}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;
