import styles from "./Header.module.scss";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import CentralPart from "./CentralPart";
import NavBar from "./NavBar";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <>
      <CSSTransition
        in={showNavBar}
        timeout={100}
        classNames="navBar-open"
        unmountOnExit
        onEnter={() => setShowNavBar(true)}
        onExited={() => setShowNavBar(false)}
      >
        <NavBar setShowNavBar={setShowNavBar} />
      </CSSTransition>
      <header className={styles.header_main}>
        <div className={styles.header_leftPart}>
          <LeftPart setShowNavBar={setShowNavBar} />
        </div>
        <div className={styles.header_centralPart}>
          <CentralPart />
        </div>
        <div className={styles.header_rightPart}>
          <RightPart />
        </div>
      </header>
    </>
  );
}

export default Header;
