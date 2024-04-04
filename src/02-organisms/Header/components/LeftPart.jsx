import LookbookLink from "../ui/LookbookLink";
import NavBarBtn from "../ui/NavBarBtn";
import ShopsLink from "../ui/ShopsLink";
import styles from "./LeftPart.module.scss";
import SearchBtn from "../ui/SearchBtn";

function LeftPart({ setShowNavBar }) {
  return (
    <div className={styles.mainDiv}>
      <NavBarBtn setShowNavBar={setShowNavBar} />
      <LookbookLink />
      <ShopsLink />
      <div className={styles.searchBtn_btn}>
        <SearchBtn />
      </div>
    </div>
  );
}

export default LeftPart;
