import userBtn from "../img/UserBtn.svg";
import styles from "./UserBtn.module.scss";

function UserBtn() {
  return (
    <button className={styles.userBtn_btn}>
      <img className={styles.userBtn_img} src={userBtn} />
    </button>
  );
}

export default UserBtn;
