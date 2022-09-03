import styles from "./HopDotLoader.module.scss";

export default function HopDotLoader() {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader}>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderDot}></div>
        <div className={styles.loaderText}></div>
      </div>
    </div>
  );
}
