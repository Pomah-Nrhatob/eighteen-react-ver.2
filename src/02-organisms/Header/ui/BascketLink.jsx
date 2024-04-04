import { Link } from "react-router-dom";
import bascketBtn from "../img/BascketBtn.svg";
import styles from "./BascketLink.module.scss";
import { useEffect, useState } from "react";
import alterCount from "../img/AlterCount.svg";

function BascketLink() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let arrayBascketProducts = [];
  arrayBascketProducts.length = 5;
  let bascketProducts = arrayBascketProducts.length;

  return (
    <Link to="bascket" className={styles.bascketLink_main}>
      <img className={styles.bascketLink_img} src={bascketBtn} />
      {bascketProducts == 0 ? (
        ""
      ) : width > 1080 ? (
        bascketProducts
      ) : (
        <img src={alterCount} className={styles.alterCount_img} />
      )}
    </Link>
  );
}

export default BascketLink;
