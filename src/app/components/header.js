import styles from "./header.module.css";
import MenuButton from "../home/components/menuButton";
import HelpButton from "../home/components/helpButton";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.menuLeft}>
          <MenuButton />
        </div>
        <div className={styles.menuCenter}>
          <Link href="/home">
            <Logo />
          </Link>
        </div>
        <Link href="/FAQPage">
          <div className={styles.menuRight}>
            <HelpButton />
          </div>
        </Link>
      </header>
    );
  }