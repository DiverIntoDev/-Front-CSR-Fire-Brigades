import Header from '../components/header'
import Footer from '../components/footer'
import FAQ from './components/FAQ'
import styles from "./FAQpage.module.css";

function FAQPage() {

    return (
      <div className={styles.page}>
        <Header/>
        <div className={styles.ajuda}>
          Ajuda
        </div>
        <div className={styles.content}>
          <FAQ />
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default FAQPage