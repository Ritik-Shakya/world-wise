import styles from "./Button.module.css";

function Button({ children, onClick, styleType }) {
  return (
    <button className={`${styles.btn} ${styles[styleType]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
