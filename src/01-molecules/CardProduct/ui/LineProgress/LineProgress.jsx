import styles from "./LineProgress.module.scss";

function LineProgress({ backgroundDiv }) {
  let a;
  let b;
  let c;

  switch (backgroundDiv) {
    case "div1":
      a = 1;
      break;
    case "div2":
      b = 1;
      break;
    case "div3":
      c = 1;
      break;
  }

  return (
    <div className={styles.div_main}>
      <div style={{ opacity: a }} className={styles.div_half}></div>
      <div style={{ opacity: b }} className={styles.div_half}></div>
      <div style={{ opacity: c }} className={styles.div_half}></div>
    </div>
  );
}

export default LineProgress;
