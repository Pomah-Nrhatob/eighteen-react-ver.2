import searchBtn from "../img/SearchBtn.svg";
import styles from "./SearchBtn.module.scss";

function SearchBtn() {
  let searchClick = () => {
    console.log("Seach click");
  };

  return (
    <>
      <button onClick={searchClick} className={styles.searchBtn}>
        <img src={searchBtn} className={styles.searchBtn_img} />
      </button>
    </>
  );
}

export default SearchBtn;
