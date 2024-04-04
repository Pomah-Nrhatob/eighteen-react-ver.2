import styles from "./ButtonToLeft.module.scss";
import btn from "../img/BtnToRightLeft.svg";

function ButtonToLeft({ clickLeft }) {
  return (
    <button onClick={clickLeft} className={styles.btn_circle}>
      <img className={styles.btn} src={btn} />
    </button>
  );
}

export default ButtonToLeft;
