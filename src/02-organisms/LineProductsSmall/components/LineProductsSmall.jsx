import HeaderLine from "../../LineProductsMedium/components/HeaderLine";
import ScrollLine from "./ScrollLineForSmall";
import styles from "./LineProductsSmall.module.scss";

function LineProductsSmall({ name, slug, quantity }) {
  return (
    <main className={styles.lineProductsSmall_main}>
      <HeaderLine name={name} slug={slug} quantity={quantity} />
      <ScrollLine />
    </main>
  );
}

export default LineProductsSmall;
