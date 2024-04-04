import whatsAppBtn from "../img/WhatsappBtn.svg";
import styles from "./WhatsAppBtn.module.scss";

function WhatsAppBtn() {
  let clickNumber = () => {
    console.log("Click Number");
  };

  let clickWhatsAppBtn = () => {
    console.log("Click WhatsAppBtn");
  };

  return (
    <div className={styles.whatsAppBtn_div}>
      <button onClick={clickWhatsAppBtn} className={styles.whatsAppBtn}>
        <img src={whatsAppBtn} className={styles.whatsAppBtn_img} />
      </button>
      <button onClick={clickNumber} className={styles.whatsAppBtn_number}>
        +7 499 350 90 81
      </button>
    </div>
  );
}

export default WhatsAppBtn;
