import styles from "./CentralImg.module.scss";
import MainLogo from "../img/Main_Logo.svg";
import { Link } from "react-router-dom";

function CentralImg() {
  return (
    <Link to="/" className={styles.mainLogo_div}>
      <img src={MainLogo} className={styles.mainLogo_img} />
    </Link>
  );
}

export default CentralImg;
