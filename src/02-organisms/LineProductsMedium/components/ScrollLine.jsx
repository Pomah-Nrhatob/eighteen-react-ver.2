import CardProduct from "../../../01-molecules/CardProduct/components/CardProduct";
import styles from "./ScrollLine.module.scss";
import ButtonToRight from "../ui/ButtonToRight";
import ButtonToLeft from "../ui/ButtonToLeft";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function ScrollLine() {
  const products = useSelector((state) => state.lineProductsMediumList);
  const ref = useRef(null);
  const widthWindow = window.innerWidth;
  let [scroll, setScroll] = useState(0);

  const clickRight = () => {
    scroll < widthWindow * 3
      ? setScroll((scroll += widthWindow))
      : setScroll(scroll);
    ref.current.scrollTo(scroll * 0.5, 0);
  };

  const clickLeft = () => {
    scroll > 0 ? setScroll((scroll -= widthWindow)) : setScroll(scroll);
    ref.current.scrollTo(scroll / 2, 0);
  };

  return (
    <div ref={ref} className={styles.scrollLine_divMain2}>
      <div className={styles.scrollLine_divMain}>
        {products.map((el) => {
          return el.id < 11 ? (
            <CardProduct
              img1={el.img1}
              img2={el.img2}
              img3={el.img3}
              name={el.name}
              key={el.id}
              slugCatalog={el.catalog}
              slug={el.slug}
              id={el.id}
            />
          ) : (
            ""
          );
        })}
        <div className={styles.twoBtn}>
          {scroll > widthWindow * 2.5 ? (
            ""
          ) : (
            <ButtonToRight clickRight={clickRight} />
          )}
          {scroll < widthWindow / 2 ? (
            ""
          ) : (
            <ButtonToLeft clickLeft={clickLeft} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ScrollLine;
