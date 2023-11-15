import React, { useRef } from "react";
import styles from "./CallBlock.module.scss";

const CallBlock = () => {
  const nameRef = useRef("");
  const phoneRef = useRef("");
  const buttonRef = useRef(false);

  const send = async () => {
    if (
      nameRef.current.value == "" ||
      phoneRef.current.value == "" ||
      buttonRef.current.checked == false
    ) {
      alert("Заполните все данные и нажмите галочку");
    } else {
      nameRef.current.value = "";
      phoneRef.current.value = "";
      buttonRef.current.checked = false;
      alert("Ваша заявка отправлена! Ожидайте звонка!");
    }
  };
  return (
    <>
      <div className={styles.block}>
        <p className={styles.title}>Обратный звонок</p>
        <div className={styles.inputBlock}>
          <input ref={nameRef} className={styles.input} type='text' placeholder='Ваше имя' />
          <input
            ref={phoneRef}
            className={styles.input}
            type='number'
            placeholder='Номер телефона'
          />
        </div>
        <div className={styles.checkbox}>
          <input ref={buttonRef} className={styles.inputCheckbox} type='checkbox' />
          <p className={styles.confirm}>Согласие на обработку персональных данных</p>
        </div>
      </div>
      <div onClick={() => send()} className={styles.send}>
        <p className={styles.button}>
          Отправить <span style={{ marginLeft: "5%" }}>→</span>
        </p>
      </div>
    </>
  );
};

export default CallBlock;
