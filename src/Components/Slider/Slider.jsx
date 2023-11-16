import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [activeButton, setActiveButton] = React.useState(0);
  const sliderText = [
    {
      boldNumber: 8,
      boldText: "хорошо",
      thinTitle: "Оценка дизайнеру:",
      thinDescription: "Все понятно и минималистично",
    },
    {
      boldNumber: 3,
      boldText: "звезд",
      thinTitle: "Сложность задания",
      thinDescription: "Разобраться с InstApi и Maps было сложнее чем NextJs...",
    },
    {
      boldNumber: "7",
      boldText: "часов",
      thinTitle: "Потребовалось на тестовое задание:",
      thinDescription: "Большую часть времени разбирался с API и Maps",
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
