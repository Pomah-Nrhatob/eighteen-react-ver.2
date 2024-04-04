import { Outlet } from "react-router-dom";
import Header from "../../02-organisms/Header/components/Header";
import styles from "./MainLayout.module.css";
import { useEffect, useState } from "react";
import { getCatalogs } from "../../08-http";

function MainLayout() {
  useEffect(() => {
    getCatalogs
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.mainLayot}>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
