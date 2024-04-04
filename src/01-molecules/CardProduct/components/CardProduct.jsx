import { Link } from "react-router-dom";
import BackgroundCard from "./BackgroundCard";
import styles from "./CardProduct.module.scss";

function CardProduct({ img1, img2, img3, slugCatalog, slug, id }) {
  return (
    <Link
      to={`catalog/${slugCatalog}/${id}`}
      className={styles.cardProduct_divMain}
    >
      <BackgroundCard img1={img1} img2={img2} img3={img3} />
    </Link>
  );
}

export default CardProduct;
