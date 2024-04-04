import styles from "./RightPart.module.scss";
import BascketLink from "../ui/BascketLink";
import FavoriteLink from "../ui/FavoriteLink";
import SearchBtn from "../ui/SearchBtn";
import UserBtn from "../ui/UserBtn";
import WhatsAppBtn from "../ui/WhatsAppBtn";

function RightPart() {
  return (
    <div className={styles.rightPart_div}>
      <div className={styles.searchBtn_btn}>
        <SearchBtn />
      </div>
      <WhatsAppBtn />
      <FavoriteLink />
      <BascketLink />
      <UserBtn />
    </div>
  );
}

export default RightPart;
