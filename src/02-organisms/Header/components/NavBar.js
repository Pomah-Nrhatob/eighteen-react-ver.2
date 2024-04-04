import React from "react";
import styles from "./NavBar.module.css";
import { BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function NavBar({ setShowNavBar, showNavBar }) {
  const catalogs = useSelector((state) => state.catalogsList);
  const ref = useRef(null);

  useEffect(() => {
    const _ref = ref.current;
    _ref.addEventListener("mouseleave", () => setShowNavBar(false));
  }, []);

  return (
    <div ref={ref} className={styles.navBar_div}>
      <header className={styles.navBar_header}>
        <h1>Каталог 1811</h1>
        <BiX
          onClick={() => setShowNavBar(false)}
          className={styles.navBar_btnCancel}
        />
      </header>
      <div className={styles.catalogsList_ul}>
        {catalogs.map((el) => {
          return (
            <Link
              onClick={() => setShowNavBar(false)}
              to={`catalog/${el.slug}`}
            >
              {el.name}
            </Link>
          );
        })}
      </div>
      <hr />
      <div className={styles.catalogsList_ul}>
        <Link>Мужчинам</Link>
        <Link>Lookbook</Link>
        <Link>Магазины</Link>
        <Link>Отзывы</Link>
        <Link>О нас</Link>
      </div>
    </div>
  );
}

export default NavBar;
