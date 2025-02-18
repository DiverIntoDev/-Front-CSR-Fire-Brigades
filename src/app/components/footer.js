import styles from "./footer.module.css";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerColumn}>
          <p className={styles.footerBold}>Entre em contato</p>
          <p>Contato 1</p>
          <p>Contato 2</p>
          <p>Contato 3</p>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerBold}>FAQ</p>
          <p>Como cadastrar uma brigada?</p>
          <p>Como posso fazer uma doação?</p>
          <p>Como posso me voluntariar?</p>
        </div>
      </footer>
    );
  }