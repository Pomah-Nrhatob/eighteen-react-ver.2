import styles from "./NavBarBtn.module.scss";
import NavBarBtn_Img from "../img/NavBarBtn.svg";
import { useEffect, useRef } from "react";

function NavBarBtn({ setShowNavBar }) {
  const ref = useRef(null);
  useEffect(() => {
    const _ref = ref.current;
    _ref.addEventListener("mouseenter", () => setShowNavBar(true));
  }, []);

  return (
    <>
      <button onClick={() => setShowNavBar(true)} className={styles.navBarBtn}>
        <div className={styles.navBarBtn_div}>
          <img ref={ref} src={NavBarBtn_Img} className={styles.navBarBtn_img} />
          <h3 className={styles.navBarBtn_h3}>Каталог</h3>
        </div>
      </button>
    </>
  );
}

export default NavBarBtn;
