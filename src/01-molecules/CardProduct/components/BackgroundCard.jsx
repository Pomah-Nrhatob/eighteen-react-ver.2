import { useState } from "react";
import styles from "./BackgroundCard.module.scss";
import LineProgress from "../ui/LineProgress/LineProgress";

function BackgroundCard({ img1, img2, img3 }) {
  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [backgroundDiv, setBackgroundDiv] = useState(false);

  const mouseImg2 = () => {
    setBackgroundImage(img2);
    setBackgroundDiv("div2");
  };

  const mouseImg1 = () => {
    setBackgroundImage(img1);
    setBackgroundDiv("div1");
  };

  const mouseImg3 = () => {
    setBackgroundImage(img3);
    setBackgroundDiv("div3");
  };

  const mouseOutsideCard = () => {
    setBackgroundDiv(false);
  };

  return (
    <div className={styles.post_img} onMouseLeave={mouseOutsideCard}>
      <div
        style={{ backgroundImage: backgroundImage }}
        className={styles.div_backGround}
        onMouseEnter={mouseImg1}
      >
        <div className={styles.div_half} />
        <div
          className={styles.div_half}
          onMouseEnter={mouseImg2}
          onMouseLeave={mouseImg1}
        />
        <div
          className={styles.div_half}
          onMouseEnter={mouseImg3}
          onMouseLeave={mouseImg1}
        />
        {backgroundDiv && (
          <div className={styles.line_progress}>
            <LineProgress backgroundDiv={backgroundDiv} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BackgroundCard;
