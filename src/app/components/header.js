import styles from "./header.module.css";
import Icons from "../constants/icons";
import MenuButton from "../home/components/menuButton";
import Image from "next/image";
import HelpButton from "../home/components/helpButton";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.menuLeft}>
          <MenuButton />
        </div>
        <div className={styles.menuCenter}>
          <Image
            src={Icons.logo.value}
            alt={Icons.logo.alt}
            width={160} />
        </div>
        <div className={styles.menuRight}>
          <HelpButton />
        </div>
      </header>
    );
  }