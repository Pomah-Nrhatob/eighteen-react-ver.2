import styles from "./BtnScroll.module.scss";
import BtnLeft from "../img/BtnScrollOnLeft.svg";
import BtnRight from "../img/BtnScrollOnRight.svg";

function BtnScroll({ clickRight, clickLeft }) {
  return (
    <div className={styles.btnScroll_main}>
      <button onClick={clickLeft} className={styles.btnScroll_btn}>
        <img src={BtnLeft} />
      </button>
      <button onClick={clickRight} className={styles.btnScroll_btn}>
        <img src={BtnRight} />
      </button>
    </div>
  );
}

export default BtnScroll;
