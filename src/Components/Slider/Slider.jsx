import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [activeButton, setActiveButton] = React.useState(0);
  const sliderText = [
    {
      boldNumber: 3,
      boldText: "и не более",
      thinTitle: "Оценка дизайнеру:",
      thinDescription: "Не заслужил,  там криво, там непонятно",
    },
    {
      boldNumber: 5,
      boldText: "звезд",
      thinTitle: "Сложность задания",
      thinDescription: "Миссия с вертолетиком была легче..",
    },
    {
      boldNumber: 9,
      boldText: "часов",
      thinTitle: "Потребовалось на тестовое задание:",
      thinDescription: "Справился быстро, забыл пообедать",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.bold}>
          <p className={styles.number}>{sliderText[activeButton].boldNumber}</p>
          <p className={styles.text}>{sliderText[activeButton].boldText}</p>
        </div>
        <div className={styles.thin}>
          <p className={styles.title}>{sliderText[activeButton].thinTitle}</p>
          <p className={styles.description}>{sliderText[activeButton].thinDescription}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div
          onClick={() => setActiveButton(0)}
          className={`${styles.circle} ${activeButton == 0 ? styles.active : ""}`}
        />
        <div
          onClick={() => setActiveButton(1)}
          className={`${styles.circle} ${activeButton == 1 ? styles.active : ""}`}
        />
        <div
          onClick={() => setActiveButton(2)}
          className={`${styles.circle} ${activeButton == 2 ? styles.active : ""}`}
        />
      </div>
    </div>
  );
};

export default Slider;
