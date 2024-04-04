import BtnScroll from "./BtnScroll";
import ScrollAutomatic from "./ScrollAutomatic";
import styles from "./FooterStartBanner.module.scss";

function FooterStartBanner({ clickRight, clickLeft }) {
  return (
    <div className={styles.footerStartBanner_main}>
      <ScrollAutomatic />
      <BtnScroll clickRight={clickRight} clickLeft={clickLeft} />
    </div>
  );
}

export default FooterStartBanner;
