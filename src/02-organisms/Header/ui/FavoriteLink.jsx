import { Link } from "react-router-dom";
import likeBtn from "../img/LikeBtn.svg";
import styles from "./FavoriteLink.module.scss";
import { useState, useEffect } from "react";
import alterCount from "../img/AlterCount.svg";

function FavoriteLink() {
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

  let arrayProducts = [];
  arrayProducts.length = 2;
  let counterLikes = arrayProducts.length;

  return (
    <Link to="favorite" className={styles.favoriteLink_main}>
      <img src={likeBtn} className={styles.favoriteLink_img} />
      {counterLikes == 0 ? (
        ""
      ) : width > 1080 ? (
        counterLikes
      ) : (
        <img src={alterCount} className={styles.alterCount_img} />
      )}
    </Link>
  );
}

export default FavoriteLink;
