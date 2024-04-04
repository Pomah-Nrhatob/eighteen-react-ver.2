import { Link } from "react-router-dom";
import styles from "./HeaderLine.module.scss";

function HeaderLine({ name, slug, quantity }) {
  return (
    <div className={styles.headerLine_div}>
      <div className={styles.h1_div}>
        <h1 className={styles.headerLine_h1}>{name}</h1>
        <h2 className={styles.headerLine_h2}>{quantity}</h2>
      </div>
      <Link
        to={`catalog/${slug}`}
        className={styles.headerLine_link}
      >{`Все ${name.toLowerCase()}`}</Link>
    </div>
  );
}

export default HeaderLine;
