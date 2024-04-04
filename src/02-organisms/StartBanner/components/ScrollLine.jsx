import { useState, useRef } from "react";
import DivBanner from "./DivBanner";
import styles from "./ScrollLine.module.scss";
import { useSelector } from "react-redux";

function ScrollLine() {
  const banners = useSelector((state) => state.startBanners);
  let [scrollPosition, setScrollPosition] = useState(0);

  const ref = useRef(null);

  let widthWindow = window.innerWidth;

  window.addEventListener("resize", () => {
    widthWindow = window.innerWidth;
  });
  window.removeEventListener("resize", () => {});

  const clickRight = () => {
    scrollPosition == widthWindow * (banners.length - 1)
      ? setScrollPosition(scrollPosition)
      : setScrollPosition((scrollPosition += widthWindow));
    ref.current.scrollTo(scrollPosition, 0);
  };

  const clickLeft = () => {
    scrollPosition == 0
      ? setScrollPosition(scrollPosition)
      : setScrollPosition((scrollPosition -= widthWindow));
    ref.current.scrollTo(scrollPosition, 0);
  };

  return (
    <>
      <main ref={ref} className={styles.scrollLine_main}>
        {banners.map((el) => {
          return (
            <DivBanner
              id={el.id}
              name={el.name}
              key={el.id}
              img={el.img}
              clickRight={clickRight}
              clickLeft={clickLeft}
            />
          );
        })}
      </main>
    </>
  );
}

export default ScrollLine;
