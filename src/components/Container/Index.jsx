import styles from "./Index.module.css";

/**
 * Membuat Component Container.
 * Menggunakan Teknik Composition: children.
 */
function Container({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
