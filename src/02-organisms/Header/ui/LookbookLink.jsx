import { Link } from "react-router-dom";
import styles from "./LookbookLink.module.scss";

function LookbookLink() {
  return (
    <Link to="/lookbook" className={styles.link}>
      Lookbook
    </Link>
  );
}

export default LookbookLink;
