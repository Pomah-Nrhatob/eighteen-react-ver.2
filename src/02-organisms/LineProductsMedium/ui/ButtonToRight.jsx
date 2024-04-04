import styles from "./ButtonToRight.module.scss";
import btn from "../img/BtnToRightLeft.svg";

function ButtonToRight({ clickRight }) {
  return (
    <button onClick={clickRight} className={styles.btn_circle}>
      <img className={styles.btn} src={btn} />
    </button>
  );
}

export default ButtonToRight;
