import styles from "./footer.module.css";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <p>Entre em contato</p>
          <p>Contato 1</p>
          <p>Contato 2</p>
          <p>Contato 3</p>
        </div>
        <div className={styles.footerColumn}>
          <p>FAQ</p>
          <p>Pergunta 1</p>
          <p>Pergunta 2</p>
          <p>Pergunta 3</p>
        </div>
      </footer>
    );
  }