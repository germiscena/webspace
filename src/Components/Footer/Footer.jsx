import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        <p className={styles.graphs}>Выполнил</p>
        <h6 className={styles.info}>Борисов Павел</h6>
      </div>
      <div className={styles.contacts}>
        <p className={styles.graphs}>Телефон</p>
        <h6 className={styles.info}>+375333264065</h6>
      </div>
    </div>
  );
}
