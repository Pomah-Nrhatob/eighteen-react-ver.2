import CardProduct from "../../../01-molecules/CardProduct/components/CardProduct";
import styles from "./ScrollLineForSmall.module.scss";
import ButtonToLeft from "../../LineProductsMedium/ui/ButtonToLeft";
import ButtonToRight from "../../LineProductsMedium/ui/ButtonToRight";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

function ScrollLineForSmall() {
  const ref = useRef(null);
  const products = useSelector((state) => state.lineProductsSmallList);

  const widthWindow = window.innerWidth;

  let [scroll, setScroll] = useState(0);

  const scrollToRight = () => {
    scroll * 2.5 < ref.current.scrollWidth
      ? setScroll((scroll += widthWindow * 0.2))
      : setScroll(scroll);
    ref.current.scrollTo(scroll, 0);
  };

  const scrollToLeft = () => {
    scroll > 0 ? setScroll((scroll -= widthWindow * 0.2)) : setScroll(scroll);
    ref.current.scrollTo(scroll, 0);
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
          {scroll > widthWindow / 1.5 ? (
            ""
          ) : (
            <ButtonToRight clickRight={scrollToRight} />
          )}
          {scroll === 0 ? "" : <ButtonToLeft clickLeft={scrollToLeft} />}
        </div>
      </div>
    </div>
  );
}

export default ScrollLineForSmall;
