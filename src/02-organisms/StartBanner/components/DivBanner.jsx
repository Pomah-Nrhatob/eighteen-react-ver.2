import FooterStartBanner from "../ui/FooterStartBanner";
import styles from "./DivBanner.module.scss";

function DivBanner({ name, img, clickRight, clickLeft }) {
  return (
    <div style={{ backgroundImage: img }} className={styles.divBanner_main}>
      <div></div>
      <div className={styles.divBanner_h3}>{name}</div>
      <FooterStartBanner clickRight={clickRight} clickLeft={clickLeft} />
    </div>
  );
}

export default DivBanner;
