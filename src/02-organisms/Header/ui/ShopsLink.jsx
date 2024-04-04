import { Link } from "react-router-dom";
import styles from "./ShopsLink.module.scss";

function ShopsLink() {
  return (
    <Link to="shops" className={styles.link}>
      Магазины
    </Link>
  );
}

export default ShopsLink;
