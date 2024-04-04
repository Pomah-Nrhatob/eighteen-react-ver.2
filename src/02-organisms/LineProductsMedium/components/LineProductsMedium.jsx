import HeaderLine from "./HeaderLine";
import styles from "./LineProductsMedium.module.scss";
import ScrollLine from "./ScrollLine";

function LineProductsMedium({ name, slug, quantity, img }) {
  return (
    <div className={styles.lineProductsMedium_divMain}>
      <HeaderLine name={name} slug={slug} quantity={quantity} />
      <ScrollLine />
    </div>
  );
}

export default LineProductsMedium;
